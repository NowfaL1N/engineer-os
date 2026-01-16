
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    console.log('Start seeding...');

    // Python Roadmap
    const python = await prisma.roadmap.upsert({
        where: { slug: 'python' },
        update: {},
        create: {
            slug: 'python',
            title: 'Python Developer',
            description: 'Master Python for data science, web development, and more.',
            difficulty: 'Beginner',
            sections: {
                create: [
                    {
                        title: 'Basics',
                        order: 1,
                        steps: {
                            create: [
                                {
                                    title: 'Introduction to Python',
                                    description: 'Learn about Python syntax, variables, and data types.',
                                    concepts: ['Variables', 'Data Types', 'Operators'],
                                    order: 1,
                                    resources: [
                                        { title: 'Official Docs', url: 'https://docs.python.org/3/' }
                                    ]
                                },
                                {
                                    title: 'Control Flow',
                                    description: 'Understand loops and conditional statements.',
                                    concepts: ['If/Else', 'For Loops', 'While Loops'],
                                    order: 2
                                }
                            ]
                        }
                    },
                    {
                        title: 'Data Structures',
                        order: 2,
                        steps: {
                            create: [
                                {
                                    title: 'Lists & Tuples',
                                    description: 'Working with sequences.',
                                    concepts: ['Lists', 'Tuples', 'Indexing', 'Slicing'],
                                    order: 1
                                },
                                {
                                    title: 'Dictionaries & Sets',
                                    description: 'Key-value pairs and unique collections.',
                                    concepts: ['Dicts', 'Sets'],
                                    order: 2
                                }
                            ]
                        }
                    }
                ]
            }
        }
    });

    // JavaScript Roadmap
    const javascript = await prisma.roadmap.upsert({
        where: { slug: 'javascript' },
        update: {},
        create: {
            slug: 'javascript',
            title: 'JavaScript Developer',
            description: 'The language of the web. Essential for frontend and backend.',
            difficulty: 'Beginner',
            sections: {
                create: [
                    {
                        title: 'Fundamentals',
                        order: 1,
                        steps: {
                            create: [
                                {
                                    title: 'Syntax & Basic Constructs',
                                    description: 'Variables, loops, and functions.',
                                    concepts: ['var/let/const', 'Functions', 'Arrow Functions'],
                                    order: 1
                                },
                                {
                                    title: 'DOM Manipulation',
                                    description: 'Interacting with the browser.',
                                    concepts: ['Selectors', 'Events', 'DOM Tree'],
                                    order: 2
                                }
                            ]
                        }
                    },
                    {
                        title: 'Advanced Concepts',
                        order: 2,
                        steps: {
                            create: [
                                {
                                    title: 'Async JavaScript',
                                    description: 'Handling asynchronous operations.',
                                    concepts: ['Promises', 'Async/Await', 'Callbacks'],
                                    order: 1
                                }
                            ]
                        }
                    }
                ]
            }
        }
    });

    console.log({ python, javascript });
    console.log('Seeding finished.');
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
