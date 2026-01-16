
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getRoadmaps = async () => {
    try {
        const roadmaps = await prisma.roadmap.findMany({
            orderBy: {
                title: 'asc',
            },
            select: {
                id: true,
                title: true,
                description: true,
                slug: true,
                difficulty: true,
            }
        });
        return roadmaps;
    } catch (error) {
        console.error('Error fetching roadmaps:', error);
        return [];
    }
};

export const getRoadmapBySlug = async (slug: string) => {
    try {
        const roadmap = await prisma.roadmap.findUnique({
            where: { slug },
            include: {
                sections: {
                    orderBy: { order: 'asc' },
                    include: {
                        steps: {
                            orderBy: { order: 'asc' },
                        },
                    },
                },
            },
        });
        return roadmap;
    } catch (error) {
        console.error(`Error fetching roadmap ${slug}:`, error);
        return null;
    }
};
