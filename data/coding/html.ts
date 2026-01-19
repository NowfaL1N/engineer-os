/**
 * HTML Language Data
 * 
 * Comprehensive HTML tutorial data.
 * Organized by categories with topics, explanations, and practice questions.
 */

export const htmlCoding = {
  language: "HTML",
  categories: [
    {
      id: "basics",
      title: "HTML Basics",
      topics: [
        {
          id: "html-intro",
          title: "HTML Introduction",
          explanation: "HTML (HyperText Markup Language) is the standard markup language for creating web pages. It describes the structure of a web page and consists of a series of elements that tell the browser how to display content. HTML elements label pieces of content such as headings, paragraphs, links, images, and more. HTML is not a programming language; it's a markup language that uses tags to structure content.",
          syntax: "<!DOCTYPE html>\n<html>\n<head>\n  <title>Page Title</title>\n</head>\n<body>\n  <h1>Heading</h1>\n  <p>Paragraph</p>\n</body>\n</html>",
          examples: [
            {
              title: "Basic HTML Document",
              description: "Structure of a simple HTML page",
              code: `<!DOCTYPE html>
<html>
<head>
  <title>My First Web Page</title>
</head>
<body>
  <h1>Welcome to HTML</h1>
  <p>This is my first HTML page.</p>
</body>
</html>`,
            },
          ],
          practiceQuestions: [
            {
              question: "What does HTML stand for?",
              type: "fill",
              starterCode: `HTML stands for HyperText ___ Language`,
              answer: "Markup",
            },
            {
              question: "Complete the HTML document declaration",
              type: "fill",
              starterCode: `<!DOCTYPE ___>
<html>
  <body>Hello</body>
</html>`,
              answer: "html",
            },
            {
              question: "What is the purpose of HTML?",
              type: "predict",
              starterCode: `HTML is used to structure web page content`,
              answer: "To create the structure and content of web pages",
            },
          ],
        },
        {
          id: "html-editors",
          title: "HTML Editors",
          explanation: "HTML files can be created and edited using any text editor. Popular HTML editors include Visual Studio Code, Sublime Text, Atom, Notepad++, and online editors like CodePen. Professional editors provide syntax highlighting, auto-completion, and live preview features. You can even use simple text editors like Notepad (Windows) or TextEdit (Mac), but make sure to save files with the .html extension.",
          syntax: "Save your HTML file with .html extension (e.g., index.html)",
          examples: [
            {
              title: "Creating HTML File",
              description: "How to create and save an HTML file",
              code: `<!-- Save this as index.html -->
<!DOCTYPE html>
<html>
<head>
  <title>My Page</title>
</head>
<body>
  <h1>Hello World</h1>
</body>
</html>`,
            },
          ],
          practiceQuestions: [
            {
              question: "What file extension should HTML files use?",
              type: "fill",
              starterCode: `Save as: mypage.___`,
              answer: "html",
            },
            {
              question: "Which editor is commonly used for HTML development?",
              type: "predict",
              starterCode: `Visual Studio Code, Sublime Text, or Notepad++`,
              answer: "Visual Studio Code (or any text editor)",
            },
            {
              question: "Can you create HTML files with Notepad?",
              type: "predict",
              starterCode: `Yes, any text editor can create HTML files`,
              answer: "Yes, as long as you save with .html extension",
            },
          ],
        },
        {
          id: "html-basic",
          title: "HTML Basic",
          explanation: "Every HTML document follows a basic structure. The <!DOCTYPE html> declaration defines the document type. The <html> element is the root element. The <head> element contains meta information about the document. The <title> element specifies the page title shown in the browser tab. The <body> element contains the visible page content. All HTML elements must be properly nested and closed.",
          syntax: "<!DOCTYPE html>\n<html>\n<head>\n  <title>Document Title</title>\n</head>\n<body>\n  <!-- Content goes here -->\n</body>\n</html>",
          examples: [
            {
              title: "Basic HTML Structure",
              description: "Essential structure of every HTML document",
              code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Web Page</title>
</head>
<body>
  <h1>Welcome</h1>
  <p>This is a basic HTML page.</p>
</body>
</html>`,
            },
          ],
          practiceQuestions: [
            {
              question: "What is the root element of an HTML document?",
              type: "fill",
              starterCode: `<!DOCTYPE html>
<___>
  <body>Content</body>
</___>`,
              answer: "html",
            },
            {
              question: "Where does the page title go?",
              type: "fill",
              starterCode: `<head>
  <___>My Page</___>
</head>`,
              answer: "title",
            },
            {
              question: "Complete the DOCTYPE declaration",
              type: "fill",
              starterCode: `<!DOCTYPE ___>`,
              answer: "html",
            },
          ],
        },
        {
          id: "html-elements",
          title: "HTML Elements",
          explanation: "HTML elements are the building blocks of HTML pages. An HTML element consists of a start tag, content, and an end tag. Some elements are self-closing and don't require an end tag. Elements can be nested inside other elements. Common elements include headings (<h1> to <h6>), paragraphs (<p>), links (<a>), images (<img>), and divisions (<div>). Each element has a specific purpose and meaning.",
          syntax: "<tagname>Content</tagname>\n\nSelf-closing: <tagname />",
          examples: [
            {
              title: "HTML Elements Example",
              description: "Different types of HTML elements",
              code: `<!DOCTYPE html>
<html>
<body>
  <h1>Heading Element</h1>
  <p>Paragraph element with <strong>bold text</strong>.</p>
  <div>Division element</div>
  <img src="image.jpg" alt="Image" />
</body>
</html>`,
            },
          ],
          practiceQuestions: [
            {
              question: "What are the three parts of an HTML element?",
              type: "fill",
              starterCode: `Start tag, ___, and end tag`,
              answer: "content",
            },
            {
              question: "Complete the paragraph element",
              type: "fill",
              starterCode: `<___>This is a paragraph</___>`,
              answer: "p",
            },
            {
              question: "Which element is self-closing?",
              type: "predict",
              starterCode: `<img src="photo.jpg" />`,
              answer: "img (image element)",
            },
          ],
        },
        {
          id: "html-attributes",
          title: "HTML Attributes",
          explanation: "HTML attributes provide additional information about elements. Attributes are always specified in the start tag and come in name/value pairs (name='value'). Common attributes include id (unique identifier), class (for styling), src (source for images), href (link destination), alt (alternative text), and style (inline CSS). Attributes help identify elements, link resources, and apply styling or behavior.",
          syntax: "<element attribute='value'>Content</element>\n\nMultiple attributes: <element attr1='value1' attr2='value2'>",
          examples: [
            {
              title: "HTML Attributes Example",
              description: "Using attributes in HTML elements",
              code: `<!DOCTYPE html>
<html>
<body>
  <h1 id="main-title">Heading with ID</h1>
  <p class="intro">Paragraph with class</p>
  <a href="https://example.com">Link</a>
  <img src="photo.jpg" alt="Photo description" />
  <div style="color: blue;">Styled div</div>
</body>
</html>`,
            },
          ],
          practiceQuestions: [
            {
              question: "What attribute is used for links?",
              type: "fill",
              starterCode: `<a ___="https://example.com">Link</a>`,
              answer: "href",
            },
            {
              question: "Complete the image source attribute",
              type: "fill",
              starterCode: `<img ___="photo.jpg" alt="Photo" />`,
              answer: "src",
            },
            {
              question: "What attribute provides alternative text for images?",
              type: "fill",
              starterCode: `<img src="img.jpg" ___="Description" />`,
              answer: "alt",
            },
          ],
        },
        {
          id: "html-headings",
          title: "HTML Headings",
          explanation: "HTML headings are used to define headings and subheadings. There are six levels of headings from <h1> (most important) to <h6> (least important). <h1> should be used once per page as the main heading. Headings help structure content hierarchically and improve accessibility. Search engines use headings to understand page structure. Headings are block-level elements that create visual hierarchy.",
          syntax: "<h1>Heading 1</h1>\n<h2>Heading 2</h2>\n<h3>Heading 3</h3>\n<h4>Heading 4</h4>\n<h5>Heading 5</h5>\n<h6>Heading 6</h6>",
          examples: [
            {
              title: "HTML Headings Example",
              description: "All six heading levels",
              code: `<!DOCTYPE html>
<html>
<body>
  <h1>Main Heading</h1>
  <h2>Section Heading</h2>
  <h3>Subsection Heading</h3>
  <h4>Level 4 Heading</h4>
  <h5>Level 5 Heading</h5>
  <h6>Level 6 Heading</h6>
</body>
</html>`,
            },
          ],
          practiceQuestions: [
            {
              question: "What is the largest heading tag?",
              type: "fill",
              starterCode: `<___>Main Title</___>`,
              answer: "h1",
            },
            {
              question: "How many heading levels are there in HTML?",
              type: "predict",
              starterCode: `h1, h2, h3, h4, h5, h6`,
              answer: "6",
            },
            {
              question: "Complete the smallest heading",
              type: "fill",
              starterCode: `<___>Smallest Heading</___>`,
              answer: "h6",
            },
          ],
        },
        {
          id: "html-paragraphs",
          title: "HTML Paragraphs",
          explanation: "The <p> tag defines a paragraph in HTML. Paragraphs are block-level elements that automatically add space before and after the content. Browsers automatically remove extra whitespace and line breaks in HTML, so multiple spaces are collapsed into one. To create line breaks within a paragraph, use the <br> tag. Paragraphs are essential for organizing text content and improving readability.",
          syntax: "<p>Paragraph text content</p>\n\nLine break: <p>Line 1<br>Line 2</p>",
          examples: [
            {
              title: "HTML Paragraphs Example",
              description: "Creating paragraphs in HTML",
              code: `<!DOCTYPE html>
<html>
<body>
  <p>This is the first paragraph.</p>
  <p>This is the second paragraph with a line break<br>in the middle.</p>
  <p>This is a longer paragraph that contains multiple sentences. HTML automatically handles the formatting and spacing between paragraphs.</p>
</body>
</html>`,
            },
          ],
          practiceQuestions: [
            {
              question: "What tag is used for paragraphs?",
              type: "fill",
              starterCode: `<___>This is a paragraph</___>`,
              answer: "p",
            },
            {
              question: "What tag creates a line break?",
              type: "fill",
              starterCode: `<p>Line 1<___>Line 2</p>`,
              answer: "br",
            },
            {
              question: "How do you create multiple paragraphs?",
              type: "predict",
              starterCode: `<p>First paragraph</p>
<p>Second paragraph</p>`,
              answer: "Use multiple <p> tags",
            },
          ],
        },
        {
          id: "html-styles",
          title: "HTML Styles",
          explanation: "The HTML style attribute is used to add inline CSS styling to elements. It allows you to apply colors, fonts, sizes, spacing, and other visual properties directly to HTML elements. The style attribute uses CSS syntax with property:value pairs separated by semicolons. While inline styles work, it's better practice to use external CSS files or <style> tags in the <head> section for better organization and maintainability.",
          syntax: "<element style='property:value;'>Content</element>\n\nMultiple styles: <element style='color:red; font-size:20px;'>",
          examples: [
            {
              title: "HTML Styles Example",
              description: "Using inline styles in HTML",
              code: `<!DOCTYPE html>
<html>
<body>
  <h1 style="color: blue;">Blue Heading</h1>
  <p style="color: red; font-size: 18px;">Red paragraph with larger text</p>
  <div style="background-color: yellow; padding: 20px;">Styled div</div>
  <p style="text-align: center;">Centered text</p>
</body>
</html>`,
            },
          ],
          practiceQuestions: [
            {
              question: "What attribute is used for inline styling?",
              type: "fill",
              starterCode: `<h1 ___="color: blue;">Heading</h1>`,
              answer: "style",
            },
            {
              question: "Complete the style to make text red",
              type: "fill",
              starterCode: `<p style="color: ___;">Text</p>`,
              answer: "red",
            },
            {
              question: "How do you apply multiple styles?",
              type: "predict",
              starterCode: `<p style="color: blue; font-size: 20px;">Text</p>`,
              answer: "Separate properties with semicolons",
            },
          ],
        },
        {
          id: "html-formatting",
          title: "HTML Formatting",
          explanation: "HTML provides various formatting elements to make text bold, italic, underlined, and more. <b> makes text bold, <strong> also makes text bold but indicates importance. <i> makes text italic, <em> also makes text italic but emphasizes it. <u> underlines text, <mark> highlights text, <small> makes text smaller, <del> shows deleted text, <ins> shows inserted text, <sub> creates subscript, and <sup> creates superscript. These elements help structure and emphasize content.",
          syntax: "<b>Bold</b> <strong>Strong</strong>\n<i>Italic</i> <em>Emphasized</em>\n<u>Underlined</u> <mark>Highlighted</mark>\n<small>Small</small> <del>Deleted</del> <ins>Inserted</ins>\n<sub>Subscript</sub> <sup>Superscript</sup>",
          examples: [
            {
              title: "HTML Formatting Example",
              description: "Various text formatting elements",
              code: `<!DOCTYPE html>
<html>
<body>
  <p><b>Bold text</b> and <strong>strong text</strong></p>
  <p><i>Italic text</i> and <em>emphasized text</em></p>
  <p><u>Underlined text</u> and <mark>highlighted text</mark></p>
  <p><small>Small text</small> and normal text</p>
  <p><del>Deleted text</del> and <ins>inserted text</ins></p>
  <p>H<sub>2</sub>O and E=mc<sup>2</sup></p>
</body>
</html>`,
            },
          ],
          practiceQuestions: [
            {
              question: "What tag makes text bold?",
              type: "fill",
              starterCode: `<___>Bold text</___>`,
              answer: "b",
            },
            {
              question: "What tag creates italic text?",
              type: "fill",
              starterCode: `<___>Italic text</___>`,
              answer: "i",
            },
            {
              question: "What tag creates superscript?",
              type: "fill",
              starterCode: `E=mc<___>2</___>`,
              answer: "sup",
            },
          ],
        },
        {
          id: "html-quotations",
          title: "HTML Quotations",
          explanation: "HTML provides special elements for quotations. The <blockquote> element defines a section quoted from another source. It's typically indented and displayed as a block. The <q> tag defines a short inline quotation. The <abbr> tag defines an abbreviation or acronym. The <address> tag defines contact information. The <cite> tag defines the title of a work. The <bdo> tag defines text direction. These elements help structure quoted content and provide semantic meaning.",
          syntax: "<blockquote>Long quotation</blockquote>\n<q>Short quotation</q>\n<abbr title='Full Form'>Abbreviation</abbr>\n<address>Contact info</address>\n<cite>Title</cite>\n<bdo dir='rtl'>Text</bdo>",
          examples: [
            {
              title: "HTML Quotations Example",
              description: "Using quotation and citation elements",
              code: `<!DOCTYPE html>
<html>
<body>
  <blockquote cite="https://example.com">
    This is a long quotation from another source.
  </blockquote>
  <p>He said: <q>This is a short quote.</q></p>
  <p><abbr title="HyperText Markup Language">HTML</abbr> is fun.</p>
  <address>
    Written by John Doe<br>
    Visit us at: example.com
  </address>
  <p><cite>The Book</cite> by Author</p>
</body>
</html>`,
            },
          ],
          practiceQuestions: [
            {
              question: "What tag is used for long quotations?",
              type: "fill",
              starterCode: `<___>Long quote text</___>`,
              answer: "blockquote",
            },
            {
              question: "What tag creates a short inline quotation?",
              type: "fill",
              starterCode: `<p>He said <___>quote</___></p>`,
              answer: "q",
            },
            {
              question: "What tag defines an abbreviation?",
              type: "fill",
              starterCode: `<___ title="World Wide Web">WWW</___>`,
              answer: "abbr",
            },
          ],
        },
        {
          id: "html-comments",
          title: "HTML Comments",
          explanation: "HTML comments are not displayed in the browser but can help document your HTML source code. Comments are written using <!-- --> syntax. Everything between these markers is ignored by the browser. Comments are useful for explaining code, temporarily disabling code, debugging, and leaving notes for other developers. Comments can span multiple lines and can be placed anywhere in HTML code.",
          syntax: "<!-- This is a comment -->\n\n<!--\n  This is a\n  multi-line comment\n-->",
          examples: [
            {
              title: "HTML Comments Example",
              description: "Using comments in HTML",
              code: `<!DOCTYPE html>
<html>
<body>
  <!-- This is a comment that won't be displayed -->
  <h1>Visible Heading</h1>
  
  <!--
    This is a multi-line comment
    that spans several lines
    and won't be shown in the browser
  -->
  
  <p>Visible paragraph</p>
  
  <!-- <p>This paragraph is commented out</p> -->
</body>
</html>`,
            },
          ],
          practiceQuestions: [
            {
              question: "What syntax is used for HTML comments?",
              type: "fill",
              starterCode: `<!-- This is a ___ -->`,
              answer: "comment",
            },
            {
              question: "Complete the comment syntax",
              type: "fill",
              starterCode: `<!-- ___ comment text ___ -->`,
              answer: "Your",
            },
            {
              question: "Are HTML comments visible in the browser?",
              type: "predict",
              starterCode: `<!-- Hidden comment -->`,
              answer: "No, comments are not displayed",
            },
          ],
        },
        {
          id: "html-colors",
          title: "HTML Colors",
          explanation: "HTML colors can be specified using color names, RGB values, HEX codes, HSL values, or RGBA values. HTML supports 140 standard color names like red, blue, green, etc. RGB uses red, green, blue values (0-255). HEX codes use hexadecimal values (#RRGGBB). HSL uses hue, saturation, and lightness. RGBA adds alpha transparency. Colors are used in style attributes, CSS, and various HTML elements to make pages visually appealing.",
          syntax: "Color names: color='red'\nRGB: rgb(255, 0, 0)\nHEX: #FF0000\nHSL: hsl(0, 100%, 50%)\nRGBA: rgba(255, 0, 0, 0.5)",
          examples: [
            {
              title: "HTML Colors Example",
              description: "Different ways to specify colors",
              code: `<!DOCTYPE html>
<html>
<body>
  <h1 style="color: red;">Color Name</h1>
  <h1 style="color: rgb(255, 0, 0);">RGB Color</h1>
  <h1 style="color: #FF0000;">HEX Color</h1>
  <h1 style="color: hsl(0, 100%, 50%);">HSL Color</h1>
  <div style="background-color: rgba(255, 0, 0, 0.3);">RGBA with transparency</div>
</body>
</html>`,
            },
          ],
          practiceQuestions: [
            {
              question: "What is the HEX code for red?",
              type: "fill",
              starterCode: `<h1 style="color: #___;">Red</h1>`,
              answer: "FF0000",
            },
            {
              question: "Complete the RGB value for blue",
              type: "fill",
              starterCode: `<div style="color: rgb(0, 0, ___);">Blue</div>`,
              answer: "255",
            },
            {
              question: "What color format uses transparency?",
              type: "predict",
              starterCode: `rgba(255, 0, 0, 0.5)`,
              answer: "RGBA (Red, Green, Blue, Alpha)",
            },
          ],
        },
        {
          id: "html-css",
          title: "HTML CSS",
          explanation: "CSS (Cascading Style Sheets) is used to style HTML elements. CSS can be added to HTML in three ways: inline (using style attribute), internal (using <style> tag in <head>), and external (using <link> tag to link a .css file). External CSS is the best practice as it separates content from presentation and allows reuse across multiple pages. CSS selectors target HTML elements to apply styles like colors, fonts, layouts, and animations.",
          syntax: "Inline: <element style='property:value;'>\n\nInternal: <style>element { property: value; }</style>\n\nExternal: <link rel='stylesheet' href='styles.css'>",
          examples: [
            {
              title: "HTML CSS Example",
              description: "Different ways to add CSS to HTML",
              code: `<!DOCTYPE html>
<html>
<head>
  <!-- Internal CSS -->
  <style>
    h1 { color: blue; }
    p { font-size: 18px; }
  </style>
  <!-- External CSS -->
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <!-- Inline CSS -->
  <h1 style="color: red;">Inline styled heading</h1>
  <p>Styled with internal CSS</p>
</body>
</html>`,
            },
          ],
          practiceQuestions: [
            {
              question: "What tag links an external CSS file?",
              type: "fill",
              starterCode: `<head>
  <___ rel="stylesheet" href="style.css">
</head>`,
              answer: "link",
            },
            {
              question: "Where does internal CSS go?",
              type: "fill",
              starterCode: `<head>
  <___>
    h1 { color: blue; }
  </___>
</head>`,
              answer: "style",
            },
            {
              question: "What are the three ways to add CSS?",
              type: "predict",
              starterCode: `Inline, internal, and external CSS`,
              answer: "Inline (style attribute), internal (<style> tag), external (<link> tag)",
            },
          ],
        },
        {
          id: "html-links",
          title: "HTML Links",
          explanation: "HTML links are created using the <a> (anchor) tag. The href attribute specifies the destination URL. Links can point to other web pages, files, email addresses, or sections within the same page. The target attribute controls where the link opens (_self for same window, _blank for new tab). Links can contain text, images, or other HTML elements. The title attribute provides additional information about the link. Links are essential for navigation and connecting web pages.",
          syntax: "<a href='url'>Link text</a>\n\nNew tab: <a href='url' target='_blank'>Link</a>\n\nEmail: <a href='mailto:email@example.com'>Email</a>\n\nAnchor: <a href='#section'>Jump to section</a>",
          examples: [
            {
              title: "HTML Links Example",
              description: "Creating different types of links",
              code: `<!DOCTYPE html>
<html>
<body>
  <a href="https://example.com">External Link</a>
  <a href="page.html">Internal Link</a>
  <a href="https://example.com" target="_blank">Opens in New Tab</a>
  <a href="mailto:contact@example.com">Email Link</a>
  <a href="#section1">Jump to Section</a>
  <a href="image.jpg" download>Download File</a>
</body>
</html>`,
            },
          ],
          practiceQuestions: [
            {
              question: "What tag creates a link?",
              type: "fill",
              starterCode: `<___ href="page.html">Link</___>`,
              answer: "a",
            },
            {
              question: "What attribute specifies the link destination?",
              type: "fill",
              starterCode: `<a ___="https://example.com">Link</a>`,
              answer: "href",
            },
            {
              question: "How do you make a link open in a new tab?",
              type: "fill",
              starterCode: `<a href="page.html" target="___">Link</a>`,
              answer: "_blank",
            },
          ],
        },
        {
          id: "html-images",
          title: "HTML Images",
          explanation: "HTML images are displayed using the <img> tag. The src attribute specifies the image file path or URL. The alt attribute provides alternative text for accessibility and when images can't be displayed. The width and height attributes can set image dimensions. Images can be linked by wrapping the <img> tag inside an <a> tag. The <img> tag is self-closing and doesn't require an end tag. Images enhance visual appeal and help convey information effectively.",
          syntax: "<img src='image.jpg' alt='Description'>\n\nWith dimensions: <img src='image.jpg' alt='Description' width='500' height='300'>\n\nLinked image: <a href='page.html'><img src='image.jpg' alt='Description'></a>",
          examples: [
            {
              title: "HTML Images Example",
              description: "Adding images to HTML pages",
              code: `<!DOCTYPE html>
<html>
<body>
  <img src="photo.jpg" alt="A beautiful photo">
  <img src="logo.png" alt="Company Logo" width="200" height="100">
  <a href="large-image.html">
    <img src="thumbnail.jpg" alt="Click to enlarge">
  </a>
  <img src="https://example.com/image.jpg" alt="External image">
</body>
</html>`,
            },
          ],
          practiceQuestions: [
            {
              question: "What tag displays an image?",
              type: "fill",
              starterCode: `<___ src="photo.jpg" alt="Photo">`,
              answer: "img",
            },
            {
              question: "What attribute specifies the image source?",
              type: "fill",
              starterCode: `<img ___="photo.jpg" alt="Photo">`,
              answer: "src",
            },
            {
              question: "What attribute provides alternative text?",
              type: "fill",
              starterCode: `<img src="photo.jpg" ___="Description">`,
              answer: "alt",
            },
          ],
        },
        {
          id: "html-favicon",
          title: "HTML Favicon",
          explanation: "A favicon is a small icon displayed in the browser tab next to the page title. It helps users identify your website visually. Favicons are added using the <link> tag in the <head> section with rel='icon' or rel='shortcut icon'. The href attribute points to the favicon file, typically an .ico, .png, or .svg file. Favicons are usually 16x16 or 32x32 pixels. They improve brand recognition and user experience.",
          syntax: "<link rel='icon' href='favicon.ico'>\n\nPNG favicon: <link rel='icon' type='image/png' href='favicon.png'>\n\nSVG favicon: <link rel='icon' type='image/svg+xml' href='favicon.svg'>",
          examples: [
            {
              title: "HTML Favicon Example",
              description: "Adding a favicon to your HTML page",
              code: `<!DOCTYPE html>
<html>
<head>
  <title>My Website</title>
  <link rel="icon" href="favicon.ico">
  <!-- Or use PNG -->
  <link rel="icon" type="image/png" href="favicon.png">
  <!-- Or use SVG -->
  <link rel="icon" type="image/svg+xml" href="favicon.svg">
</head>
<body>
  <h1>Welcome</h1>
</body>
</html>`,
            },
          ],
          practiceQuestions: [
            {
              question: "What tag adds a favicon?",
              type: "fill",
              starterCode: `<head>
  <___ rel="icon" href="favicon.ico">
</head>`,
              answer: "link",
            },
            {
              question: "What attribute specifies the favicon file?",
              type: "fill",
              starterCode: `<link rel="icon" ___="favicon.ico">`,
              answer: "href",
            },
            {
              question: "Where does the favicon link go?",
              type: "predict",
              starterCode: `<head>
  <link rel="icon" href="favicon.ico">
</head>`,
              answer: "In the <head> section",
            },
          ],
        },
        {
          id: "html-page-title",
          title: "HTML Page Title",
          explanation: "The HTML <title> tag defines the title of the document, which appears in the browser tab, bookmarks, and search engine results. The title should be descriptive and unique for each page. It's placed inside the <head> section. The title is important for SEO (Search Engine Optimization) and helps users identify pages when they have multiple tabs open. Keep titles concise but descriptive, typically 50-60 characters.",
          syntax: "<title>Page Title</title>",
          examples: [
            {
              title: "HTML Page Title Example",
              description: "Setting the page title",
              code: `<!DOCTYPE html>
<html>
<head>
  <title>My First Web Page - Welcome</title>
  <meta charset="UTF-8">
</head>
<body>
  <h1>Welcome to My Website</h1>
  <p>This page has a title that appears in the browser tab.</p>
</body>
</html>`,
            },
          ],
          practiceQuestions: [
            {
              question: "What tag defines the page title?",
              type: "fill",
              starterCode: `<head>
  <___>My Page Title</___>
</head>`,
              answer: "title",
            },
            {
              question: "Where does the title tag go?",
              type: "fill",
              starterCode: `<___>
  <title>My Title</title>
</___>`,
              answer: "head",
            },
            {
              question: "Where does the page title appear?",
              type: "predict",
              starterCode: `<title>My Page</title>`,
              answer: "In the browser tab",
            },
          ],
        },
        {
          id: "html-tables",
          title: "HTML Tables",
          explanation: "HTML tables are used to display data in rows and columns. Tables are created using <table>, <tr> (table row), <td> (table data/cell), and <th> (table header) elements. The <thead>, <tbody>, and <tfoot> elements help structure table sections. The <caption> element adds a table caption. Tables can have borders, spacing, and styling applied via CSS. Tables are useful for displaying structured data like schedules, statistics, and comparisons.",
          syntax: "<table>\n  <tr>\n    <th>Header</th>\n  </tr>\n  <tr>\n    <td>Data</td>\n  </tr>\n</table>",
          examples: [
            {
              title: "HTML Tables Example",
              description: "Creating a table in HTML",
              code: `<!DOCTYPE html>
<html>
<body>
  <table border="1">
    <caption>Student Grades</caption>
    <thead>
      <tr>
        <th>Name</th>
        <th>Grade</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>John</td>
        <td>A</td>
      </tr>
      <tr>
        <td>Jane</td>
        <td>B</td>
      </tr>
    </tbody>
  </table>
</body>
</html>`,
            },
          ],
          practiceQuestions: [
            {
              question: "What tag creates a table?",
              type: "fill",
              starterCode: `<___>
  <tr><td>Data</td></tr>
</___>`,
              answer: "table",
            },
            {
              question: "What tag creates a table row?",
              type: "fill",
              starterCode: `<table>
  <___>
    <td>Data</td>
  </___>
</table>`,
              answer: "tr",
            },
            {
              question: "What tag creates a table cell?",
              type: "fill",
              starterCode: `<tr>
  <___>Data</___>
</tr>`,
              answer: "td",
            },
          ],
        },
        {
          id: "html-lists",
          title: "HTML Lists",
          explanation: "HTML provides three types of lists: ordered lists (<ol>), unordered lists (<ul>), and description lists (<dl>). Ordered lists display items with numbers (1, 2, 3...). Unordered lists display items with bullets. Description lists pair terms with descriptions. List items are created using <li> tags. Lists can be nested inside other lists. Lists help organize information and improve readability. The type attribute can change numbering/bullet styles.",
          syntax: "Ordered: <ol><li>Item</li></ol>\n\nUnordered: <ul><li>Item</li></ul>\n\nDescription: <dl><dt>Term</dt><dd>Description</dd></dl>",
          examples: [
            {
              title: "HTML Lists Example",
              description: "Creating different types of lists",
              code: `<!DOCTYPE html>
<html>
<body>
  <!-- Ordered List -->
  <ol>
    <li>First item</li>
    <li>Second item</li>
    <li>Third item</li>
  </ol>
  
  <!-- Unordered List -->
  <ul>
    <li>Apple</li>
    <li>Banana</li>
    <li>Orange</li>
  </ul>
  
  <!-- Description List -->
  <dl>
    <dt>HTML</dt>
    <dd>HyperText Markup Language</dd>
    <dt>CSS</dt>
    <dd>Cascading Style Sheets</dd>
  </dl>
</body>
</html>`,
            },
          ],
          practiceQuestions: [
            {
              question: "What tag creates an ordered list?",
              type: "fill",
              starterCode: `<___>
  <li>Item</li>
</___>`,
              answer: "ol",
            },
            {
              question: "What tag creates an unordered list?",
              type: "fill",
              starterCode: `<___>
  <li>Item</li>
</___>`,
              answer: "ul",
            },
            {
              question: "What tag creates a list item?",
              type: "fill",
              starterCode: `<ul>
  <___>Item</___>
</ul>`,
              answer: "li",
            },
          ],
        },
        {
          id: "html-block-inline",
          title: "HTML Block & Inline",
          explanation: "HTML elements are either block-level or inline. Block-level elements start on a new line and take full width (e.g., <div>, <p>, <h1>-<h6>, <ul>, <table>). Inline elements don't start on a new line and only take necessary width (e.g., <span>, <a>, <img>, <strong>, <em>). Block elements can contain inline elements, but inline elements shouldn't contain block elements. Understanding this distinction helps with layout and styling. The <div> and <span> elements are generic containers for grouping content.",
          syntax: "Block: <div>Block element</div>\n\nInline: <span>Inline element</span>",
          examples: [
            {
              title: "HTML Block & Inline Example",
              description: "Difference between block and inline elements",
              code: `<!DOCTYPE html>
<html>
<body>
  <!-- Block-level elements -->
  <div style="background-color: lightblue;">Block div</div>
  <p>Block paragraph</p>
  <h1>Block heading</h1>
  
  <!-- Inline elements -->
  <span style="background-color: lightyellow;">Inline span</span>
  <a href="#">Inline link</a>
  <strong>Inline bold</strong>
  
  <!-- Block contains inline -->
  <div>
    <span>Inline inside block</span>
    <a href="#">Link</a>
  </div>
</body>
</html>`,
            },
          ],
          practiceQuestions: [
            {
              question: "What is a block-level element?",
              type: "fill",
              starterCode: `A ___ element starts on a new line and takes full width`,
              answer: "block-level",
            },
            {
              question: "What tag is a generic inline container?",
              type: "fill",
              starterCode: `<___>Inline content</___>`,
              answer: "span",
            },
            {
              question: "What tag is a generic block container?",
              type: "fill",
              starterCode: `<___>Block content</___>`,
              answer: "div",
            },
          ],
        },
        {
          id: "html-div",
          title: "HTML Div",
          explanation: "The <div> element is a generic block-level container used to group and style HTML elements. Divs have no inherent meaning but are essential for layout and styling with CSS. Divs can contain any HTML elements including other divs. They're commonly used with class or id attributes for styling and JavaScript manipulation. Divs help structure page layouts, create sections, and apply styles to groups of elements. Modern HTML5 semantic elements like <section>, <article>, and <header> are often preferred over generic divs.",
          syntax: "<div>Content</div>\n\nWith class: <div class='container'>Content</div>\n\nWith id: <div id='main'>Content</div>",
          examples: [
            {
              title: "HTML Div Example",
              description: "Using div elements for layout",
              code: `<!DOCTYPE html>
<html>
<body>
  <div id="header">
    <h1>Website Header</h1>
  </div>
  
  <div class="container">
    <div class="sidebar">
      <p>Sidebar content</p>
    </div>
    <div class="main-content">
      <p>Main content</p>
    </div>
  </div>
  
  <div id="footer">
    <p>Footer content</p>
  </div>
</body>
</html>`,
            },
          ],
          practiceQuestions: [
            {
              question: "What tag is a generic block container?",
              type: "fill",
              starterCode: `<___>Container content</___>`,
              answer: "div",
            },
            {
              question: "What is the div element used for?",
              type: "predict",
              starterCode: `<div class="container">Content</div>`,
              answer: "Grouping and styling HTML elements",
            },
            {
              question: "Is div a block or inline element?",
              type: "predict",
              starterCode: `<div>Content</div>`,
              answer: "Block-level element",
            },
          ],
        },
        {
          id: "html-classes",
          title: "HTML Classes",
          explanation: "The HTML class attribute is used to specify one or more class names for an element. Classes are used by CSS and JavaScript to select and style elements. Multiple elements can share the same class name, allowing you to style groups of elements consistently. An element can have multiple classes separated by spaces. Classes are reusable and help maintain consistent styling across a website. They're essential for CSS styling and JavaScript manipulation.",
          syntax: "<element class='classname'>Content</element>\n\nMultiple classes: <element class='class1 class2 class3'>",
          examples: [
            {
              title: "HTML Classes Example",
              description: "Using class attributes for styling",
              code: `<!DOCTYPE html>
<html>
<head>
  <style>
    .highlight { background-color: yellow; }
    .bold { font-weight: bold; }
    .center { text-align: center; }
  </style>
</head>
<body>
  <p class="highlight">Highlighted paragraph</p>
  <p class="bold">Bold paragraph</p>
  <p class="highlight bold">Multiple classes</p>
  <div class="center">Centered div</div>
</body>
</html>`,
            },
          ],
          practiceQuestions: [
            {
              question: "What attribute assigns a class to an element?",
              type: "fill",
              starterCode: `<p ___="highlight">Text</p>`,
              answer: "class",
            },
            {
              question: "How do you assign multiple classes?",
              type: "fill",
              starterCode: `<div class="class1 ___ class2">Content</div>`,
              answer: "class2",
            },
            {
              question: "What separates multiple class names?",
              type: "predict",
              starterCode: `class="class1 class2 class3"`,
              answer: "Spaces",
            },
          ],
        },
        {
          id: "html-id",
          title: "HTML Id",
          explanation: "The HTML id attribute specifies a unique identifier for an element. Unlike classes, an id must be unique within a page - only one element can have a specific id value. IDs are used by CSS and JavaScript to target specific elements. IDs can also be used as anchors for linking to specific sections of a page. IDs are case-sensitive and should start with a letter. They're useful for JavaScript manipulation and CSS styling of unique elements.",
          syntax: "<element id='unique-id'>Content</element>\n\nLink to id: <a href='#unique-id'>Jump</a>",
          examples: [
            {
              title: "HTML Id Example",
              description: "Using id attributes for unique identification",
              code: `<!DOCTYPE html>
<html>
<head>
  <style>
    #header { background-color: blue; }
    #main-content { padding: 20px; }
  </style>
</head>
<body>
  <div id="header">Header Section</div>
  <div id="main-content">Main Content</div>
  <div id="footer">Footer Section</div>
  <a href="#header">Jump to Header</a>
</body>
</html>`,
            },
          ],
          practiceQuestions: [
            {
              question: "What attribute creates a unique identifier?",
              type: "fill",
              starterCode: `<div ___="header">Content</div>`,
              answer: "id",
            },
            {
              question: "Can multiple elements have the same id?",
              type: "predict",
              starterCode: `<div id="header">One</div>
<div id="header">Two</div>`,
              answer: "No, id must be unique",
            },
            {
              question: "How do you link to an element with an id?",
              type: "fill",
              starterCode: `<a href="#___">Jump</a>`,
              answer: "header",
            },
          ],
        },
        {
          id: "html-buttons",
          title: "HTML Buttons",
          explanation: "HTML buttons are created using the <button> element or <input type='button'>. Buttons are clickable elements that trigger actions. The <button> element can contain text, images, or other HTML elements. Buttons can have type attributes: 'button' (default), 'submit' (submits form), or 'reset' (resets form). Buttons are essential for user interaction and form submission. They can be styled with CSS and controlled with JavaScript to perform various actions.",
          syntax: "<button>Button Text</button>\n\nWith type: <button type='button'>Click</button>\n\nInput button: <input type='button' value='Click'>",
          examples: [
            {
              title: "HTML Buttons Example",
              description: "Creating different types of buttons",
              code: `<!DOCTYPE html>
<html>
<body>
  <button>Click Me</button>
  <button type="button">Regular Button</button>
  <button type="submit">Submit</button>
  <button type="reset">Reset</button>
  <input type="button" value="Input Button">
  <button onclick="alert('Clicked!')">JavaScript Button</button>
</body>
</html>`,
            },
          ],
          practiceQuestions: [
            {
              question: "What tag creates a button?",
              type: "fill",
              starterCode: `<___>Click Me</___>`,
              answer: "button",
            },
            {
              question: "What type submits a form?",
              type: "fill",
              starterCode: `<button type="___">Submit</button>`,
              answer: "submit",
            },
            {
              question: "What input type creates a button?",
              type: "fill",
              starterCode: `<input type="___" value="Click">`,
              answer: "button",
            },
          ],
        },
        {
          id: "html-iframes",
          title: "HTML Iframes",
          explanation: "An iframe (inline frame) is used to embed another HTML page within the current page. The <iframe> tag creates an inline frame that can display content from another source. The src attribute specifies the URL of the page to embed. Iframes are commonly used to embed videos, maps, advertisements, or other web content. They can have width, height, and other attributes for styling and control. Iframes allow you to display external content without leaving your page.",
          syntax: "<iframe src='url'></iframe>\n\nWith dimensions: <iframe src='url' width='500' height='300'></iframe>",
          examples: [
            {
              title: "HTML Iframes Example",
              description: "Embedding content with iframes",
              code: `<!DOCTYPE html>
<html>
<body>
  <h1>Embedded Content</h1>
  <iframe src="https://example.com" width="800" height="600"></iframe>
  <iframe src="page.html" title="Embedded Page"></iframe>
  <iframe width="560" height="315" src="https://www.youtube.com/embed/VIDEO_ID"></iframe>
</body>
</html>`,
            },
          ],
          practiceQuestions: [
            {
              question: "What tag embeds another HTML page?",
              type: "fill",
              starterCode: `<___ src="page.html"></___>`,
              answer: "iframe",
            },
            {
              question: "What attribute specifies the iframe source?",
              type: "fill",
              starterCode: `<iframe ___="page.html"></iframe>`,
              answer: "src",
            },
            {
              question: "What is an iframe used for?",
              type: "predict",
              starterCode: `<iframe src="content.html"></iframe>`,
              answer: "Embedding another HTML page",
            },
          ],
        },
        {
          id: "html-javascript",
          title: "HTML JavaScript",
          explanation: "JavaScript can be added to HTML pages to make them interactive and dynamic. JavaScript can be added inline using the <script> tag, or externally by linking to a .js file. Inline scripts go in the <head> or <body> section. External scripts use the src attribute. JavaScript can manipulate HTML elements, handle events, validate forms, and create dynamic content. The <noscript> tag provides content for browsers that don't support JavaScript.",
          syntax: "Inline: <script>JavaScript code</script>\n\nExternal: <script src='script.js'></script>\n\nNoscript: <noscript>Content</noscript>",
          examples: [
            {
              title: "HTML JavaScript Example",
              description: "Adding JavaScript to HTML",
              code: `<!DOCTYPE html>
<html>
<head>
  <script>
    function greet() {
      alert('Hello, World!');
    }
  </script>
</head>
<body>
  <button onclick="greet()">Click Me</button>
  <script src="external.js"></script>
  <noscript>Your browser does not support JavaScript.</noscript>
</body>
</html>`,
            },
          ],
          practiceQuestions: [
            {
              question: "What tag adds JavaScript to HTML?",
              type: "fill",
              starterCode: `<___>
  alert('Hello');
</___>`,
              answer: "script",
            },
            {
              question: "How do you link an external JavaScript file?",
              type: "fill",
              starterCode: `<script ___="script.js"></script>`,
              answer: "src",
            },
            {
              question: "What tag provides content when JavaScript is disabled?",
              type: "fill",
              starterCode: `<___>No JavaScript</___>`,
              answer: "noscript",
            },
          ],
        },
        {
          id: "html-file-paths",
          title: "HTML File Paths",
          explanation: "File paths specify the location of files (images, CSS, JavaScript, other HTML pages) relative to the current HTML file. Absolute paths start with / or http:// and point to a specific location. Relative paths are relative to the current file's location. Use ./ for current directory, ../ for parent directory. Understanding file paths is crucial for linking resources correctly. Incorrect paths result in broken links and missing resources.",
          syntax: "Absolute: /folder/file.html or https://example.com/file.html\n\nRelative: ./file.html (same folder)\n../file.html (parent folder)\nfolder/file.html (subfolder)",
          examples: [
            {
              title: "HTML File Paths Example",
              description: "Different types of file paths",
              code: `<!DOCTYPE html>
<html>
<body>
  <!-- Absolute path -->
  <img src="/images/photo.jpg" alt="Photo">
  <a href="https://example.com/page.html">External Link</a>
  
  <!-- Relative paths -->
  <img src="photo.jpg" alt="Same folder">
  <img src="./images/photo.jpg" alt="Current folder">
  <img src="../images/photo.jpg" alt="Parent folder">
  <link rel="stylesheet" href="css/styles.css">
  <script src="js/script.js"></script>
</body>
</html>`,
            },
          ],
          practiceQuestions: [
            {
              question: "What does ../ mean in a file path?",
              type: "fill",
              starterCode: `<img src="___/image.jpg">`,
              answer: "../",
            },
            {
              question: "What does ./ mean in a file path?",
              type: "predict",
              starterCode: `<script src="./script.js"></script>`,
              answer: "Current directory",
            },
            {
              question: "What type of path starts with /?",
              type: "predict",
              starterCode: `<img src="/images/photo.jpg">`,
              answer: "Absolute path",
            },
          ],
        },
        {
          id: "html-head",
          title: "HTML Head",
          explanation: "The HTML <head> element contains metadata about the document that isn't displayed on the page. It includes elements like <title>, <meta>, <link>, <style>, and <script>. The <head> section comes before the <body> and provides information to browsers and search engines. Meta tags describe page content, character encoding, viewport settings, and more. The head section is essential for SEO, page configuration, and linking external resources.",
          syntax: "<head>\n  <title>Page Title</title>\n  <meta charset='UTF-8'>\n  <link rel='stylesheet' href='style.css'>\n</head>",
          examples: [
            {
              title: "HTML Head Example",
              description: "Complete head section with common elements",
              code: `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Page description">
  <meta name="keywords" content="HTML, CSS, JavaScript">
  <title>My Web Page</title>
  <link rel="stylesheet" href="styles.css">
  <link rel="icon" href="favicon.ico">
  <style>
    body { margin: 0; }
  </style>
</head>
<body>
  <h1>Content</h1>
</body>
</html>`,
            },
          ],
          practiceQuestions: [
            {
              question: "What element contains page metadata?",
              type: "fill",
              starterCode: `<___>
  <title>Page</title>
</___>`,
              answer: "head",
            },
            {
              question: "What meta tag sets character encoding?",
              type: "fill",
              starterCode: `<meta ___="UTF-8">`,
              answer: "charset",
            },
            {
              question: "Where does the head section go?",
              type: "predict",
              starterCode: `<html>
<head>...</head>
<body>...</body>
</html>`,
              answer: "Before the body section",
            },
          ],
        },
        {
          id: "html-layout",
          title: "HTML Layout",
          explanation: "HTML layout structures content on a web page. Traditional layouts used tables or divs with CSS float/position. Modern HTML5 provides semantic layout elements: <header> for header content, <nav> for navigation, <section> for sections, <article> for articles, <aside> for sidebar content, and <footer> for footer content. These semantic elements improve accessibility, SEO, and code readability. CSS Grid and Flexbox are commonly used with these elements for responsive layouts.",
          syntax: "<header>Header</header>\n<nav>Navigation</nav>\n<section>Section</section>\n<article>Article</article>\n<aside>Sidebar</aside>\n<footer>Footer</footer>",
          examples: [
            {
              title: "HTML Layout Example",
              description: "Using semantic HTML5 layout elements",
              code: `<!DOCTYPE html>
<html>
<body>
  <header>
    <h1>Website Header</h1>
  </header>
  
  <nav>
    <a href="#">Home</a>
    <a href="#">About</a>
    <a href="#">Contact</a>
  </nav>
  
  <section>
    <article>
      <h2>Article Title</h2>
      <p>Article content...</p>
    </article>
  </section>
  
  <aside>
    <h3>Sidebar</h3>
    <p>Sidebar content...</p>
  </aside>
  
  <footer>
    <p>Copyright © 2024</p>
  </footer>
</body>
</html>`,
            },
          ],
          practiceQuestions: [
            {
              question: "What semantic element is used for navigation?",
              type: "fill",
              starterCode: `<___>
  <a href="#">Link</a>
</___>`,
              answer: "nav",
            },
            {
              question: "What element represents an independent article?",
              type: "fill",
              starterCode: `<___>
  <h2>Title</h2>
</___>`,
              answer: "article",
            },
            {
              question: "What element is used for the page footer?",
              type: "fill",
              starterCode: `<___>Footer content</___>`,
              answer: "footer",
            },
          ],
        },
        {
          id: "html-responsive",
          title: "HTML Responsive",
          explanation: "Responsive web design makes web pages look good on all devices (desktops, tablets, phones). The viewport meta tag sets the page width to follow the screen width. CSS media queries allow different styles for different screen sizes. Flexible images and grids adapt to screen size. Responsive design uses relative units (%, em, rem) instead of fixed pixels. Mobile-first approach designs for small screens first, then enhances for larger screens.",
          syntax: "<meta name='viewport' content='width=device-width, initial-scale=1.0'>\n\nResponsive image: <img src='img.jpg' style='max-width:100%; height:auto;'>",
          examples: [
            {
              title: "HTML Responsive Example",
              description: "Creating a responsive web page",
              code: `<!DOCTYPE html>
<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    * { box-sizing: border-box; }
    .row::after { content: ""; clear: both; display: table; }
    [class*="col-"] { float: left; padding: 15px; }
    .col-1 { width: 8.33%; }
    .col-2 { width: 16.66%; }
    .col-3 { width: 25%; }
    .col-9 { width: 75%; }
    @media only screen and (max-width: 768px) {
      [class*="col-"] { width: 100%; }
    }
  </style>
</head>
<body>
  <div class="row">
    <div class="col-3">Sidebar</div>
    <div class="col-9">Main Content</div>
  </div>
</body>
</html>`,
            },
          ],
          practiceQuestions: [
            {
              question: "What meta tag makes a page responsive?",
              type: "fill",
              starterCode: `<meta name="___" content="width=device-width, initial-scale=1.0">`,
              answer: "viewport",
            },
            {
              question: "What CSS feature allows different styles for different screen sizes?",
              type: "predict",
              starterCode: `@media only screen and (max-width: 768px) { ... }`,
              answer: "Media queries",
            },
            {
              question: "What unit is better for responsive design than pixels?",
              type: "predict",
              starterCode: `width: 100% or width: 50em`,
              answer: "Percentage (%) or em/rem",
            },
          ],
        },
        {
          id: "html-computercode",
          title: "HTML Computercode",
          explanation: "HTML provides elements to display computer code, code output, and keyboard input. The <code> element displays inline code. The <pre> element preserves whitespace and formatting for code blocks. The <kbd> element represents keyboard input. The <samp> element represents sample output from a program. The <var> element represents a variable. These elements help display code snippets, commands, and technical content clearly and semantically.",
          syntax: "<code>Inline code</code>\n<pre>Code block</pre>\n<kbd>Keyboard input</kbd>\n<samp>Sample output</samp>\n<var>Variable</var>",
          examples: [
            {
              title: "HTML Computercode Example",
              description: "Displaying code and technical content",
              code: `<!DOCTYPE html>
<html>
<body>
  <p>Use the <code>print()</code> function to display output.</p>
  
  <pre>
function greet() {
  console.log("Hello");
}
  </pre>
  
  <p>Press <kbd>Ctrl</kbd> + <kbd>C</kbd> to copy.</p>
  
  <p>Program output: <samp>Hello, World!</samp></p>
  
  <p>The variable <var>x</var> equals 5.</p>
</body>
</html>`,
            },
          ],
          practiceQuestions: [
            {
              question: "What tag displays inline code?",
              type: "fill",
              starterCode: `<p>Use <___>code</___> here.</p>`,
              answer: "code",
            },
            {
              question: "What tag preserves whitespace for code blocks?",
              type: "fill",
              starterCode: `<___>
  function() { }
</___>`,
              answer: "pre",
            },
            {
              question: "What tag represents keyboard input?",
              type: "fill",
              starterCode: `Press <___>Enter</___> to continue.`,
              answer: "kbd",
            },
          ],
        },
        {
          id: "html-semantics",
          title: "HTML Semantics",
          explanation: "Semantic HTML uses elements that clearly describe their meaning and purpose. Semantic elements like <header>, <nav>, <main>, <article>, <section>, <aside>, and <footer> make HTML more readable and accessible. They help screen readers understand page structure, improve SEO, and make code maintenance easier. Semantic HTML separates content meaning from presentation, allowing CSS to handle styling while HTML describes content structure.",
          syntax: "<header>Header</header>\n<main>Main content</main>\n<article>Article</article>\n<section>Section</section>\n<aside>Sidebar</aside>\n<footer>Footer</footer>",
          examples: [
            {
              title: "HTML Semantics Example",
              description: "Using semantic HTML elements",
              code: `<!DOCTYPE html>
<html>
<body>
  <header>
    <h1>Website Title</h1>
  </header>
  
  <nav>
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
    </ul>
  </nav>
  
  <main>
    <article>
      <h2>Article Title</h2>
      <p>Article content...</p>
    </article>
  </main>
  
  <aside>
    <h3>Related Links</h3>
  </aside>
  
  <footer>
    <p>Copyright information</p>
  </footer>
</body>
</html>`,
            },
          ],
          practiceQuestions: [
            {
              question: "What is semantic HTML?",
              type: "predict",
              starterCode: `<header>Header</header>
<main>Content</main>`,
              answer: "HTML that clearly describes meaning and purpose",
            },
            {
              question: "What element contains the main content?",
              type: "fill",
              starterCode: `<___>
  <h1>Main Content</h1>
</___>`,
              answer: "main",
            },
            {
              question: "Why is semantic HTML important?",
              type: "predict",
              starterCode: `Semantic HTML improves accessibility and SEO`,
              answer: "Improves accessibility, SEO, and code readability",
            },
          ],
        },
        {
          id: "html-style-guide",
          title: "HTML Style Guide",
          explanation: "Following HTML style guidelines makes code consistent, readable, and maintainable. Use lowercase for element names and attribute names. Always quote attribute values. Close all HTML elements properly. Use lowercase for DOCTYPE. Indent nested elements consistently. Use meaningful names for id and class attributes. Add comments to explain complex sections. Keep code organized and well-structured. Following style guides helps teams collaborate effectively and maintain code quality.",
          syntax: "Good: <div class='container'>\nBad: <DIV CLASS=\"container\">\n\nGood: <img src='photo.jpg' alt='Photo'>\nBad: <img src=photo.jpg>",
          examples: [
            {
              title: "HTML Style Guide Example",
              description: "Following HTML best practices",
              code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>My Page</title>
</head>
<body>
  <!-- Main container -->
  <div class="container">
    <header>
      <h1>Page Title</h1>
    </header>
    
    <main>
      <section>
        <h2>Section Title</h2>
        <p>Content here.</p>
      </section>
    </main>
  </div>
</body>
</html>`,
            },
          ],
          practiceQuestions: [
            {
              question: "Should HTML element names be uppercase or lowercase?",
              type: "fill",
              starterCode: `<___>Content</___>`,
              answer: "lowercase",
            },
            {
              question: "Should attribute values be quoted?",
              type: "predict",
              starterCode: `<div class="container">`,
              answer: "Yes, always quote attribute values",
            },
            {
              question: "What helps explain complex code sections?",
              type: "predict",
              starterCode: `<!-- This is a comment -->`,
              answer: "Comments",
            },
          ],
        },
        {
          id: "html-entities",
          title: "HTML Entities",
          explanation: "HTML entities are used to display reserved characters or characters not available on the keyboard. They start with & and end with ;. Common entities include &lt; for <, &gt; for >, &amp; for &, &quot; for \", &apos; for ', and &nbsp; for non-breaking space. Entities can also represent special characters, symbols, and characters from other languages. They ensure characters display correctly in browsers regardless of character encoding.",
          syntax: "&entity_name; or &#entity_number;\n\nCommon: &lt; &gt; &amp; &quot; &nbsp;",
          examples: [
            {
              title: "HTML Entities Example",
              description: "Using HTML entities for special characters",
              code: `<!DOCTYPE html>
<html>
<body>
  <p>Less than: &lt;</p>
  <p>Greater than: &gt;</p>
  <p>Ampersand: &amp;</p>
  <p>Quote: &quot;Hello&quot;</p>
  <p>Copyright: &copy;</p>
  <p>Euro: &euro;</p>
  <p>Non-breaking space: Hello&nbsp;World</p>
  <p>Em dash: &mdash;</p>
</body>
</html>`,
            },
          ],
          practiceQuestions: [
            {
              question: "What entity represents the less-than symbol?",
              type: "fill",
              starterCode: `<p>&___;</p>`,
              answer: "lt",
            },
            {
              question: "What entity represents an ampersand?",
              type: "fill",
              starterCode: `<p>&___;</p>`,
              answer: "amp",
            },
            {
              question: "What does &nbsp; represent?",
              type: "predict",
              starterCode: `Hello&nbsp;World`,
              answer: "Non-breaking space",
            },
          ],
        },
        {
          id: "html-symbols",
          title: "HTML Symbols",
          explanation: "HTML symbols are special characters, mathematical symbols, Greek letters, and other symbols that can be displayed using HTML entities. Symbols are represented using entity names or entity numbers. Common symbols include mathematical operators (∑, ∫, ∞), arrows (→, ←, ↑, ↓), currency symbols (€, £, ¥), and Greek letters (α, β, γ). Symbols enhance content presentation and allow display of technical and mathematical content.",
          syntax: "&symbol_name; or &#symbol_number;\n\nExamples: &sum; &alpha; &rarr; &euro;",
          examples: [
            {
              title: "HTML Symbols Example",
              description: "Displaying various HTML symbols",
              code: `<!DOCTYPE html>
<html>
<body>
  <p>Sum: &sum;</p>
  <p>Alpha: &alpha;</p>
  <p>Beta: &beta;</p>
  <p>Arrow right: &rarr;</p>
  <p>Arrow left: &larr;</p>
  <p>Infinity: &infin;</p>
  <p>Pi: &pi;</p>
  <p>Copyright: &copy;</p>
  <p>Registered: &reg;</p>
  <p>Trademark: &trade;</p>
</body>
</html>`,
            },
          ],
          practiceQuestions: [
            {
              question: "What entity represents the sum symbol?",
              type: "fill",
              starterCode: `<p>&___;</p>`,
              answer: "sum",
            },
            {
              question: "What entity represents the copyright symbol?",
              type: "fill",
              starterCode: `<p>&___;</p>`,
              answer: "copy",
            },
            {
              question: "What entity represents infinity?",
              type: "fill",
              starterCode: `<p>&___;</p>`,
              answer: "infin",
            },
          ],
        },
        {
          id: "html-emojis",
          title: "HTML Emojis",
          explanation: "Emojis can be displayed in HTML using Unicode characters or decimal/hexadecimal entity codes. Modern browsers support emojis directly using Unicode characters. Emojis can be copied directly into HTML or used via entity codes. Common emojis include 😀 (smiling face), ❤️ (heart), 🚀 (rocket), and many more. Emojis add visual interest and emotion to web content. They're widely supported in modern browsers and enhance user engagement.",
          syntax: "Direct: 😀 ❤️ 🚀\n\nEntity: &#128512; (decimal) or &#x1F600; (hexadecimal)",
          examples: [
            {
              title: "HTML Emojis Example",
              description: "Displaying emojis in HTML",
              code: `<!DOCTYPE html>
<html>
<body>
  <h1>Emojis in HTML</h1>
  <p>Smiling face: 😀</p>
  <p>Heart: ❤️</p>
  <p>Rocket: 🚀</p>
  <p>Thumbs up: 👍</p>
  <p>Using entity: &#128512;</p>
  <p>Using hex: &#x1F600;</p>
  <p>Star: ⭐</p>
  <p>Fire: 🔥</p>
</body>
</html>`,
            },
          ],
          practiceQuestions: [
            {
              question: "How can emojis be added to HTML?",
              type: "predict",
              starterCode: `<p>😀</p>`,
              answer: "Directly using Unicode characters or entity codes",
            },
            {
              question: "What format is used for hexadecimal emoji entities?",
              type: "fill",
              starterCode: `<p>&#x___;</p>`,
              answer: "1F600",
            },
            {
              question: "Are emojis widely supported in modern browsers?",
              type: "predict",
              starterCode: `<p>😀</p>`,
              answer: "Yes, emojis are well-supported",
            },
          ],
        },
        {
          id: "html-charsets",
          title: "HTML Charsets",
          explanation: "Character encoding determines how characters are stored and displayed. The charset meta tag specifies the character encoding for the HTML document. UTF-8 is the most common and recommended encoding as it supports all characters from all languages. It's declared in the <head> section using <meta charset='UTF-8'>. Proper charset declaration ensures special characters, symbols, and international characters display correctly. Without proper encoding, characters may appear as garbled text.",
          syntax: "<meta charset='UTF-8'>\n\nOther encodings: ISO-8859-1, Windows-1252",
          examples: [
            {
              title: "HTML Charsets Example",
              description: "Setting character encoding",
              code: `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>My Page</title>
</head>
<body>
  <h1>Character Encoding</h1>
  <p>English: Hello World</p>
  <p>Spanish: Hola Mundo</p>
  <p>French: Bonjour le monde</p>
  <p>Chinese: 你好世界</p>
  <p>Special characters: © ® ™ € £</p>
</body>
</html>`,
            },
          ],
          practiceQuestions: [
            {
              question: "What is the recommended charset for HTML?",
              type: "fill",
              starterCode: `<meta charset="___">`,
              answer: "UTF-8",
            },
            {
              question: "Where does the charset meta tag go?",
              type: "fill",
              starterCode: `<___>
  <meta charset="UTF-8">
</___>`,
              answer: "head",
            },
            {
              question: "Why is charset important?",
              type: "predict",
              starterCode: `<meta charset="UTF-8">`,
              answer: "Ensures characters display correctly",
            },
          ],
        },
        {
          id: "html-url-encode",
          title: "HTML URL Encode",
          explanation: "URL encoding converts characters into a format that can be transmitted over the Internet. URLs can only contain certain characters (letters, digits, and some special characters). Other characters must be encoded using percent encoding (% followed by hexadecimal digits). Common encodings include space as %20, < as %3C, > as %3E, & as %26, and # as %23. URL encoding ensures URLs work correctly across different systems and prevents errors from special characters.",
          syntax: "Space: %20\n<: %3C\n>: %3E\n&: %26\n#: %23\n@: %40",
          examples: [
            {
              title: "HTML URL Encode Example",
              description: "URL encoding examples",
              code: `<!DOCTYPE html>
<html>
<body>
  <h1>URL Encoding</h1>
  <p>Space: %20</p>
  <p>Less than: %3C</p>
  <p>Greater than: %3E</p>
  <p>Ampersand: %26</p>
  <p>Hash: %23</p>
  <p>At sign: %40</p>
  
  <a href="page.html?name=John%20Doe">Encoded URL</a>
  <a href="search.html?q=hello%20world">Search with spaces</a>
</body>
</html>`,
            },
          ],
          practiceQuestions: [
            {
              question: "How is a space encoded in a URL?",
              type: "fill",
              starterCode: `https://example.com/page?name=John%___Doe`,
              answer: "20",
            },
            {
              question: "What encoding format is used for URLs?",
              type: "predict",
              starterCode: `%20 for space, %3C for <`,
              answer: "Percent encoding (% followed by hex)",
            },
            {
              question: "Why is URL encoding necessary?",
              type: "predict",
              starterCode: `URLs can only contain certain characters`,
              answer: "To safely transmit special characters in URLs",
            },
          ],
        },
        {
          id: "html-vs-xhtml",
          title: "HTML vs XHTML",
          explanation: "HTML and XHTML are both markup languages, but XHTML is stricter. HTML is more forgiving with syntax errors, while XHTML follows XML rules strictly. XHTML requires all tags to be lowercase, all tags to be closed, attribute values to be quoted, and proper nesting. HTML5 is the current standard and combines the best of HTML and XHTML. Modern web development primarily uses HTML5, which is more flexible than XHTML but can be written with XHTML-like strictness if desired.",
          syntax: "HTML5: <!DOCTYPE html>\nXHTML: <!DOCTYPE html PUBLIC '-//W3C//DTD XHTML 1.0 Strict//EN'...>\n\nHTML: <br>\nXHTML: <br />",
          examples: [
            {
              title: "HTML vs XHTML Example",
              description: "Differences between HTML and XHTML",
              code: `<!DOCTYPE html>
<html>
<head>
  <title>HTML5 Example</title>
</head>
<body>
  <!-- HTML5 is more flexible -->
  <p>This is HTML5</p>
  <br>
  <img src="photo.jpg" alt="Photo">
  
  <!-- XHTML would require -->
  <!-- <p>This is XHTML</p> -->
  <!-- <br /> -->
  <!-- <img src="photo.jpg" alt="Photo" /> -->
</body>
</html>`,
            },
          ],
          practiceQuestions: [
            {
              question: "Which is stricter: HTML or XHTML?",
              type: "predict",
              starterCode: `XHTML follows XML rules strictly`,
              answer: "XHTML",
            },
            {
              question: "What is the current HTML standard?",
              type: "fill",
              starterCode: `<!DOCTYPE ___>`,
              answer: "html",
            },
            {
              question: "Does XHTML require all tags to be closed?",
              type: "predict",
              starterCode: `<br /> instead of <br>`,
              answer: "Yes, XHTML requires all tags to be closed",
            },
          ],
        },
      ],
    },
    {
      id: "forms",
      title: "HTML Forms",
      topics: [
        {
          id: "html-forms",
          title: "HTML Forms",
          explanation: "HTML forms are used to collect user input. Forms are created using the <form> element and contain various input elements like text fields, checkboxes, radio buttons, submit buttons, etc. When submitted, form data is sent to a server for processing. The action attribute specifies where to send form data, and the method attribute specifies how to send it (GET or POST). Forms are essential for user interaction on websites, enabling login, registration, search, and data collection.",
          syntax: "<form action='url' method='get|post'>\n  <!-- form elements -->\n</form>",
          examples: [
            {
              title: "HTML Forms Example",
              description: "Creating a basic HTML form",
              code: `<!DOCTYPE html>
<html>
<body>
  <form action="/submit" method="post">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name"><br><br>
    
    <label for="email">Email:</label>
    <input type="email" id="email" name="email"><br><br>
    
    <input type="submit" value="Submit">
  </form>
</body>
</html>`,
            },
          ],
          practiceQuestions: [
            {
              question: "What tag creates an HTML form?",
              type: "fill",
              starterCode: `<___ action="/submit" method="post">
  <!-- form elements -->
</___>`,
              answer: "form",
            },
            {
              question: "What attribute specifies where form data is sent?",
              type: "fill",
              starterCode: `<form ___="/submit" method="post">`,
              answer: "action",
            },
            {
              question: "What are the two common form methods?",
              type: "predict",
              starterCode: `method="get" or method="post"`,
              answer: "GET and POST",
            },
          ],
        },
        {
          id: "html-form-attributes",
          title: "HTML Form Attributes",
          explanation: "HTML form attributes control form behavior and submission. The action attribute specifies the URL where form data is sent. The method attribute defines how data is sent (GET appends data to URL, POST sends data in request body). The target attribute specifies where to display the response. The autocomplete attribute enables or disables browser autocomplete. The novalidate attribute disables HTML5 validation. The enctype attribute specifies how form data should be encoded when submitted.",
          syntax: "<form action='url' method='get|post' target='_blank|_self' autocomplete='on|off' novalidate enctype='multipart/form-data'>",
          examples: [
            {
              title: "HTML Form Attributes Example",
              description: "Using various form attributes",
              code: `<!DOCTYPE html>
<html>
<body>
  <!-- Form with GET method -->
  <form action="/search" method="get">
    <input type="text" name="query">
    <input type="submit" value="Search">
  </form>
  
  <!-- Form with POST method -->
  <form action="/submit" method="post" target="_blank">
    <input type="text" name="data">
    <input type="submit" value="Submit">
  </form>
  
  <!-- Form with file upload -->
  <form action="/upload" method="post" enctype="multipart/form-data">
    <input type="file" name="file">
    <input type="submit" value="Upload">
  </form>
</body>
</html>`,
            },
          ],
          practiceQuestions: [
            {
              question: "What method sends form data in the request body?",
              type: "fill",
              starterCode: `<form method="___">`,
              answer: "post",
            },
            {
              question: "What attribute is needed for file uploads?",
              type: "fill",
              starterCode: `<form enctype="___">`,
              answer: "multipart/form-data",
            },
            {
              question: "What does the target attribute control?",
              type: "predict",
              starterCode: `target="_blank"`,
              answer: "Where to display the form response",
            },
          ],
        },
        {
          id: "html-form-elements",
          title: "HTML Form Elements",
          explanation: "HTML forms contain various input elements for collecting different types of data. Common form elements include <input> for text, password, email, etc., <textarea> for multi-line text, <select> for dropdown menus, <button> for buttons, <label> for labeling inputs, <fieldset> for grouping related elements, and <legend> for fieldset captions. Each element has specific attributes and purposes. Proper use of form elements creates user-friendly forms that collect data efficiently.",
          syntax: "<input type='text'>\n<textarea></textarea>\n<select><option>Option</option></select>\n<button>Button</button>\n<label for='id'>Label</label>",
          examples: [
            {
              title: "HTML Form Elements Example",
              description: "Different form elements",
              code: `<!DOCTYPE html>
<html>
<body>
  <form>
    <label for="text">Text Input:</label>
    <input type="text" id="text" name="text"><br><br>
    
    <label for="textarea">Textarea:</label>
    <textarea id="textarea" name="textarea" rows="4" cols="50"></textarea><br><br>
    
    <label for="select">Select:</label>
    <select id="select" name="select">
      <option value="option1">Option 1</option>
      <option value="option2">Option 2</option>
    </select><br><br>
    
    <button type="submit">Submit</button>
  </form>
</body>
</html>`,
            },
          ],
          practiceQuestions: [
            {
              question: "What element creates a multi-line text input?",
              type: "fill",
              starterCode: `<___ rows="4" cols="50"></___>`,
              answer: "textarea",
            },
            {
              question: "What element creates a dropdown menu?",
              type: "fill",
              starterCode: `<___>
  <option>Option</option>
</___>`,
              answer: "select",
            },
            {
              question: "What element labels form inputs?",
              type: "fill",
              starterCode: `<___ for="input-id">Label</___>`,
              answer: "label",
            },
          ],
        },
        {
          id: "html-input-types",
          title: "HTML Input Types",
          explanation: "The HTML <input> element has many types for different input purposes. Common types include text, password, email, number, date, checkbox, radio, file, submit, button, and more. Each type provides appropriate input controls and validation. HTML5 introduced many new input types like email, url, tel, search, range, color, and date pickers. Different input types help users enter data correctly and provide better user experience with appropriate keyboards on mobile devices.",
          syntax: "<input type='text|password|email|number|date|checkbox|radio|file|submit|button|...'>",
          examples: [
            {
              title: "HTML Input Types Example",
              description: "Various input types",
              code: `<!DOCTYPE html>
<html>
<body>
  <form>
    <input type="text" placeholder="Text input"><br><br>
    <input type="password" placeholder="Password"><br><br>
    <input type="email" placeholder="Email"><br><br>
    <input type="number" placeholder="Number"><br><br>
    <input type="date"><br><br>
    <input type="checkbox" id="check"> <label for="check">Checkbox</label><br><br>
    <input type="radio" id="radio1" name="radio"> <label for="radio1">Radio 1</label>
    <input type="radio" id="radio2" name="radio"> <label for="radio2">Radio 2</label><br><br>
    <input type="file"><br><br>
    <input type="submit" value="Submit">
  </form>
</body>
</html>`,
            },
          ],
          practiceQuestions: [
            {
              question: "What input type hides the entered text?",
              type: "fill",
              starterCode: `<input type="___">`,
              answer: "password",
            },
            {
              question: "What input type validates email format?",
              type: "fill",
              starterCode: `<input type="___">`,
              answer: "email",
            },
            {
              question: "What input type allows selecting multiple options?",
              type: "fill",
              starterCode: `<input type="___">`,
              answer: "checkbox",
            },
          ],
        },
        {
          id: "html-input-attributes",
          title: "HTML Input Attributes",
          explanation: "HTML input elements have many attributes that control their behavior and appearance. Common attributes include name (identifies input), value (default value), placeholder (hint text), required (makes field mandatory), disabled (disables input), readonly (makes input read-only), maxlength (maximum characters), min/max (for numbers/dates), pattern (regex validation), and autocomplete. Attributes help control input validation, user experience, and form functionality.",
          syntax: "<input type='text' name='field' value='default' placeholder='hint' required disabled readonly maxlength='50' min='0' max='100' pattern='[A-Za-z]'>",
          examples: [
            {
              title: "HTML Input Attributes Example",
              description: "Using various input attributes",
              code: `<!DOCTYPE html>
<html>
<body>
  <form>
    <input type="text" name="username" placeholder="Enter username" required><br><br>
    
    <input type="email" name="email" value="user@example.com" readonly><br><br>
    
    <input type="number" name="age" min="18" max="100" required><br><br>
    
    <input type="text" name="code" pattern="[A-Z]{3}" placeholder="ABC"><br><br>
    
    <input type="text" name="comment" maxlength="100" placeholder="Max 100 characters"><br><br>
    
    <input type="text" name="disabled" disabled value="Disabled field"><br><br>
    
    <input type="submit" value="Submit">
  </form>
</body>
</html>`,
            },
          ],
          practiceQuestions: [
            {
              question: "What attribute makes an input field required?",
              type: "fill",
              starterCode: `<input type="text" ___>`,
              answer: "required",
            },
            {
              question: "What attribute sets placeholder text?",
              type: "fill",
              starterCode: `<input type="text" ___="Enter text">`,
              answer: "placeholder",
            },
            {
              question: "What attribute limits maximum characters?",
              type: "fill",
              starterCode: `<input type="text" ___="50">`,
              answer: "maxlength",
            },
          ],
        },
        {
          id: "input-form-attributes",
          title: "Input Form Attributes",
          explanation: "Some input attributes relate to the form element. The form attribute allows an input to be associated with a form even if it's outside the form element. The formaction attribute overrides the form's action attribute. The formmethod attribute overrides the form's method. The formenctype attribute overrides the form's enctype. The formtarget attribute overrides the form's target. The formnovalidate attribute disables validation. These attributes provide flexibility in form design.",
          syntax: "<input form='form-id' formaction='url' formmethod='post' formenctype='multipart/form-data' formtarget='_blank' formnovalidate>",
          examples: [
            {
              title: "Input Form Attributes Example",
              description: "Using form-related input attributes",
              code: `<!DOCTYPE html>
<html>
<body>
  <form id="myForm" action="/default">
    <input type="text" name="data">
    <input type="submit" value="Default Submit">
  </form>
  
  <!-- Input outside form but associated with it -->
  <input type="text" name="outside" form="myForm">
  
  <!-- Submit with different action -->
  <input type="submit" form="myForm" formaction="/custom" value="Custom Submit">
  
  <!-- Submit with different method -->
  <input type="submit" form="myForm" formmethod="get" value="GET Submit">
  
  <!-- Submit without validation -->
  <input type="submit" form="myForm" formnovalidate value="No Validation">
</body>
</html>`,
            },
          ],
          practiceQuestions: [
            {
              question: "What attribute associates an input with a form outside the form element?",
              type: "fill",
              starterCode: `<input type="text" ___="myForm">`,
              answer: "form",
            },
            {
              question: "What attribute overrides the form's action?",
              type: "fill",
              starterCode: `<input type="submit" ___="/custom">`,
              answer: "formaction",
            },
            {
              question: "What attribute disables form validation?",
              type: "fill",
              starterCode: `<input type="submit" ___>`,
              answer: "formnovalidate",
            },
          ],
        },
      ],
    },
    {
      id: "graphics",
      title: "HTML Graphics",
      topics: [
        {
          id: "html-canvas",
          title: "HTML Canvas",
          explanation: "The HTML <canvas> element is used to draw graphics via JavaScript. Canvas provides a drawing surface where you can render shapes, lines, text, images, and animations programmatically. It's useful for creating games, charts, graphs, and interactive visualizations. Canvas drawing is done using JavaScript methods like getContext('2d') to get a 2D rendering context. The canvas element itself is just a container; all drawing is done with JavaScript.",
          syntax: "<canvas id='myCanvas' width='500' height='300'></canvas>\n\nJavaScript: var ctx = canvas.getContext('2d');",
          examples: [
            {
              title: "HTML Canvas Example",
              description: "Drawing on a canvas element",
              code: `<!DOCTYPE html>
<html>
<body>
  <canvas id="myCanvas" width="500" height="300" style="border:1px solid #000;"></canvas>
  
  <script>
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    
    // Draw a rectangle
    ctx.fillStyle = "blue";
    ctx.fillRect(50, 50, 200, 100);
    
    // Draw a circle
    ctx.beginPath();
    ctx.arc(300, 150, 50, 0, 2 * Math.PI);
    ctx.fillStyle = "red";
    ctx.fill();
    
    // Draw text
    ctx.fillStyle = "black";
    ctx.font = "30px Arial";
    ctx.fillText("Hello Canvas", 50, 200);
  </script>
</body>
</html>`,
            },
          ],
          practiceQuestions: [
            {
              question: "What tag creates a canvas for drawing?",
              type: "fill",
              starterCode: `<___ id="canvas" width="500" height="300"></___>`,
              answer: "canvas",
            },
            {
              question: "What method gets the 2D drawing context?",
              type: "fill",
              starterCode: `var ctx = canvas.getContext("___");`,
              answer: "2d",
            },
            {
              question: "Is canvas drawing done with HTML or JavaScript?",
              type: "predict",
              starterCode: `ctx.fillRect(0, 0, 100, 100);`,
              answer: "JavaScript",
            },
          ],
        },
        {
          id: "html-svg",
          title: "HTML SVG",
          explanation: "SVG (Scalable Vector Graphics) is an XML-based format for describing vector graphics. SVG graphics are scalable and don't lose quality when zoomed. SVG can be embedded directly in HTML using the <svg> tag. SVG supports shapes like circles, rectangles, lines, paths, text, and more. SVG elements can be styled with CSS and manipulated with JavaScript. SVG is ideal for logos, icons, charts, and graphics that need to scale without quality loss.",
          syntax: "<svg width='500' height='300'>\n  <circle cx='100' cy='100' r='50' fill='blue'/>\n  <rect x='200' y='50' width='100' height='100' fill='red'/>\n</svg>",
          examples: [
            {
              title: "HTML SVG Example",
              description: "Creating SVG graphics in HTML",
              code: `<!DOCTYPE html>
<html>
<body>
  <svg width="500" height="300" style="border:1px solid #000;">
    <!-- Circle -->
    <circle cx="100" cy="100" r="50" fill="blue" />
    
    <!-- Rectangle -->
    <rect x="200" y="50" width="100" height="100" fill="red" />
    
    <!-- Line -->
    <line x1="0" y1="200" x2="500" y2="200" stroke="green" stroke-width="3" />
    
    <!-- Text -->
    <text x="250" y="250" font-family="Arial" font-size="24" fill="black">
      Hello SVG
    </text>
    
    <!-- Path -->
    <path d="M 50 250 L 150 200 L 250 250" stroke="purple" stroke-width="2" fill="none" />
  </svg>
</body>
</html>`,
            },
          ],
          practiceQuestions: [
            {
              question: "What tag creates SVG graphics?",
              type: "fill",
              starterCode: `<___ width="500" height="300">
  <circle cx="100" cy="100" r="50" />
</___>`,
              answer: "svg",
            },
            {
              question: "What SVG element creates a circle?",
              type: "fill",
              starterCode: `<___ cx="100" cy="100" r="50" fill="blue" />`,
              answer: "circle",
            },
            {
              question: "Are SVG graphics scalable?",
              type: "predict",
              starterCode: `<svg width="500" height="300">...</svg>`,
              answer: "Yes, SVG is scalable vector graphics",
            },
          ],
        },
      ],
    },
    {
      id: "media",
      title: "HTML Media",
      topics: [
        {
          id: "html-media",
          title: "HTML Media",
          explanation: "HTML provides elements for embedding multimedia content including audio, video, and other media types. Media elements enhance web pages with rich content. The <video> element embeds video files, the <audio> element embeds audio files, and the <source> element specifies multiple media sources for different formats. Media elements support attributes like controls, autoplay, loop, muted, and preload. Modern browsers support various media formats like MP4, WebM, OGG for video and MP3, WAV, OGG for audio.",
          syntax: "<video src='video.mp4' controls></video>\n<audio src='audio.mp3' controls></audio>\n\nWith multiple sources: <video controls><source src='video.mp4'><source src='video.webm'></video>",
          examples: [
            {
              title: "HTML Media Example",
              description: "Embedding media content",
              code: `<!DOCTYPE html>
<html>
<body>
  <h2>Video</h2>
  <video width="400" controls>
    <source src="movie.mp4" type="video/mp4">
    <source src="movie.webm" type="video/webm">
    Your browser does not support the video tag.
  </video>
  
  <h2>Audio</h2>
  <audio controls>
    <source src="audio.mp3" type="audio/mpeg">
    <source src="audio.ogg" type="audio/ogg">
    Your browser does not support the audio tag.
  </audio>
</body>
</html>`,
            },
          ],
          practiceQuestions: [
            {
              question: "What tag embeds video content?",
              type: "fill",
              starterCode: `<___ src="video.mp4" controls></___>`,
              answer: "video",
            },
            {
              question: "What tag embeds audio content?",
              type: "fill",
              starterCode: `<___ src="audio.mp3" controls></___>`,
              answer: "audio",
            },
            {
              question: "What element specifies multiple media sources?",
              type: "fill",
              starterCode: `<video>
  <___ src="video.mp4">
</video>`,
              answer: "source",
            },
          ],
        },
        {
          id: "html-video",
          title: "HTML Video",
          explanation: "The HTML <video> element embeds video content in web pages. It supports multiple video formats through <source> elements, allowing browsers to choose the best supported format. Common attributes include src (video source), controls (shows play controls), autoplay (starts automatically), loop (repeats video), muted (starts muted), poster (thumbnail image), width/height (dimensions), and preload (loading behavior). Video formats like MP4, WebM, and OGG are widely supported across browsers.",
          syntax: "<video src='video.mp4' controls autoplay loop muted width='640' height='360' poster='image.jpg'></video>\n\nWith sources: <video controls><source src='video.mp4' type='video/mp4'><source src='video.webm' type='video/webm'></video>",
          examples: [
            {
              title: "HTML Video Example",
              description: "Embedding video with various attributes",
              code: `<!DOCTYPE html>
<html>
<body>
  <!-- Simple video -->
  <video src="movie.mp4" controls width="640" height="360"></video>
  
  <!-- Video with multiple sources -->
  <video controls width="640" height="360" poster="thumbnail.jpg">
    <source src="movie.mp4" type="video/mp4">
    <source src="movie.webm" type="video/webm">
    <source src="movie.ogg" type="video/ogg">
    Your browser does not support the video tag.
  </video>
  
  <!-- Autoplay video (muted for autoplay to work) -->
  <video autoplay muted loop>
    <source src="background.mp4" type="video/mp4">
  </video>
</body>
</html>`,
            },
          ],
          practiceQuestions: [
            {
              question: "What attribute shows video controls?",
              type: "fill",
              starterCode: `<video src="video.mp4" ___></video>`,
              answer: "controls",
            },
            {
              question: "What attribute sets a video thumbnail?",
              type: "fill",
              starterCode: `<video poster="___"></video>`,
              answer: "thumbnail.jpg",
            },
            {
              question: "Why is muted often used with autoplay?",
              type: "predict",
              starterCode: `<video autoplay muted>`,
              answer: "Browsers require muted for autoplay to work",
            },
          ],
        },
        {
          id: "html-audio",
          title: "HTML Audio",
          explanation: "The HTML <audio> element embeds audio content in web pages. It supports multiple audio formats through <source> elements. Common attributes include src (audio source), controls (shows play controls), autoplay (starts automatically), loop (repeats audio), muted (starts muted), and preload (loading behavior). Audio formats like MP3, WAV, and OGG are commonly used. The audio element provides a simple way to add sound effects, music, podcasts, and other audio content to web pages.",
          syntax: "<audio src='audio.mp3' controls autoplay loop muted></audio>\n\nWith sources: <audio controls><source src='audio.mp3' type='audio/mpeg'><source src='audio.ogg' type='audio/ogg'></audio>",
          examples: [
            {
              title: "HTML Audio Example",
              description: "Embedding audio with various attributes",
              code: `<!DOCTYPE html>
<html>
<body>
  <!-- Simple audio -->
  <audio src="sound.mp3" controls></audio>
  
  <!-- Audio with multiple sources -->
  <audio controls>
    <source src="sound.mp3" type="audio/mpeg">
    <source src="sound.ogg" type="audio/ogg">
    <source src="sound.wav" type="audio/wav">
    Your browser does not support the audio tag.
  </audio>
  
  <!-- Autoplay audio -->
  <audio autoplay loop>
    <source src="background.mp3" type="audio/mpeg">
  </audio>
  
  <!-- Audio with preload -->
  <audio controls preload="auto">
    <source src="music.mp3" type="audio/mpeg">
  </audio>
</body>
</html>`,
            },
          ],
          practiceQuestions: [
            {
              question: "What tag embeds audio content?",
              type: "fill",
              starterCode: `<___ src="audio.mp3" controls></___>`,
              answer: "audio",
            },
            {
              question: "What attribute shows audio controls?",
              type: "fill",
              starterCode: `<audio src="audio.mp3" ___></audio>`,
              answer: "controls",
            },
            {
              question: "What are common audio formats?",
              type: "predict",
              starterCode: `MP3, WAV, OGG`,
              answer: "MP3, WAV, OGG",
            },
          ],
        },
        {
          id: "html-plugins",
          title: "HTML Plug‑ins",
          explanation: "HTML plugins extend browser functionality, though modern browsers have reduced plugin support. Historically, plugins like Flash, Java applets, and ActiveX were used. The <object> and <embed> elements were used to embed plugins. Modern web development prefers native HTML5 elements like <video> and <audio> instead of plugins. The <object> element can embed various content types, while <embed> is used for external content. Plugins are largely deprecated in favor of HTML5 standards and JavaScript APIs.",
          syntax: "<object data='file.swf' type='application/x-shockwave-flash'></object>\n<embed src='file.swf' type='application/x-shockwave-flash'>\n\nModern alternative: <video> or <audio> elements",
          examples: [
            {
              title: "HTML Plugins Example",
              description: "Using object and embed elements (deprecated)",
              code: `<!DOCTYPE html>
<html>
<body>
  <!-- Object element (deprecated) -->
  <object data="animation.swf" type="application/x-shockwave-flash" width="400" height="300">
    <param name="movie" value="animation.swf">
    Your browser does not support plugins.
  </object>
  
  <!-- Embed element (deprecated) -->
  <embed src="animation.swf" type="application/x-shockwave-flash" width="400" height="300">
  
  <!-- Modern HTML5 alternative -->
  <video controls width="400" height="300">
    <source src="video.mp4" type="video/mp4">
  </video>
</body>
</html>`,
            },
          ],
          practiceQuestions: [
            {
              question: "What element was used to embed plugins?",
              type: "fill",
              starterCode: `<___ data="file.swf"></___>`,
              answer: "object",
            },
            {
              question: "Are plugins still recommended for modern web development?",
              type: "predict",
              starterCode: `Modern browsers prefer HTML5 elements`,
              answer: "No, plugins are deprecated",
            },
            {
              question: "What modern elements replace plugins?",
              type: "predict",
              starterCode: `<video> and <audio> elements`,
              answer: "HTML5 video and audio elements",
            },
          ],
        },
        {
          id: "html-youtube",
          title: "HTML YouTube",
          explanation: "YouTube videos can be embedded in HTML pages using iframes. YouTube provides embed code for each video that uses an iframe pointing to youtube.com/embed/VIDEO_ID. The iframe allows embedding YouTube videos without requiring users to leave your page. You can customize the embed with URL parameters like autoplay, loop, controls, and start time. YouTube embedding is simple, doesn't require plugins, and works across all modern browsers. It's the standard way to include YouTube videos in web pages.",
          syntax: "<iframe src='https://www.youtube.com/embed/VIDEO_ID' width='560' height='315' frameborder='0' allowfullscreen></iframe>\n\nWith parameters: <iframe src='https://www.youtube.com/embed/VIDEO_ID?autoplay=1&loop=1'></iframe>",
          examples: [
            {
              title: "HTML YouTube Example",
              description: "Embedding YouTube videos",
              code: `<!DOCTYPE html>
<html>
<body>
  <!-- Basic YouTube embed -->
  <iframe width="560" height="315" 
    src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowfullscreen>
  </iframe>
  
  <!-- YouTube with autoplay -->
  <iframe width="560" height="315" 
    src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1" 
    frameborder="0" 
    allowfullscreen>
  </iframe>
  
  <!-- YouTube with start time -->
  <iframe width="560" height="315" 
    src="https://www.youtube.com/embed/dQw4w9WgXcQ?start=30" 
    frameborder="0" 
    allowfullscreen>
  </iframe>
</body>
</html>`,
            },
          ],
          practiceQuestions: [
            {
              question: "What element embeds YouTube videos?",
              type: "fill",
              starterCode: `<___ src="https://www.youtube.com/embed/VIDEO_ID"></___>`,
              answer: "iframe",
            },
            {
              question: "What is the YouTube embed URL format?",
              type: "fill",
              starterCode: `https://www.youtube.com/___/VIDEO_ID`,
              answer: "embed",
            },
            {
              question: "What URL parameter enables autoplay?",
              type: "predict",
              starterCode: `?autoplay=1`,
              answer: "autoplay=1",
            },
          ],
        },
      ],
    },
    {
      id: "apis",
      title: "HTML APIs",
      topics: [
        {
          id: "html-web-apis",
          title: "HTML Web APIs",
          explanation: "HTML5 Web APIs provide powerful functionality for web applications. Common APIs include Geolocation API for location services, Drag and Drop API for interactive elements, Web Storage API for local data storage, Web Workers API for background processing, Server-Sent Events (SSE) for real-time updates, and many more. These APIs enable rich, interactive web applications without plugins. They're accessed through JavaScript and provide features like file access, device orientation, notifications, and real-time communication.",
          syntax: "Geolocation: navigator.geolocation.getCurrentPosition()\nStorage: localStorage.setItem('key', 'value')\nWorkers: var worker = new Worker('worker.js')\nSSE: var source = new EventSource('events.php')",
          examples: [
            {
              title: "HTML Web APIs Example",
              description: "Using various HTML5 Web APIs",
              code: `<!DOCTYPE html>
<html>
<body>
  <h2>Geolocation API</h2>
  <button onclick="getLocation()">Get Location</button>
  <p id="location"></p>
  
  <h2>Local Storage</h2>
  <input type="text" id="data">
  <button onclick="saveData()">Save</button>
  <button onclick="loadData()">Load</button>
  
  <script>
    // Geolocation
    function getLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
      }
    }
    function showPosition(position) {
      document.getElementById("location").innerHTML = 
        "Latitude: " + position.coords.latitude + 
        "<br>Longitude: " + position.coords.longitude;
    }
    
    // Local Storage
    function saveData() {
      localStorage.setItem("data", document.getElementById("data").value);
    }
    function loadData() {
      document.getElementById("data").value = localStorage.getItem("data");
    }
  </script>
</body>
</html>`,
            },
          ],
          practiceQuestions: [
            {
              question: "What API provides location services?",
              type: "fill",
              starterCode: `navigator.___.getCurrentPosition()`,
              answer: "geolocation",
            },
            {
              question: "What API stores data locally in the browser?",
              type: "fill",
              starterCode: `localStorage.___('key', 'value')`,
              answer: "setItem",
            },
            {
              question: "What are HTML5 Web APIs used for?",
              type: "predict",
              starterCode: `APIs provide functionality for web applications`,
              answer: "Enabling rich, interactive web applications",
            },
          ],
        },
        {
          id: "html-geolocation",
          title: "HTML Geolocation",
          explanation: "The HTML5 Geolocation API allows web pages to access the user's geographical location. It's accessed through navigator.geolocation and requires user permission. The getCurrentPosition() method gets the current position once, while watchPosition() continuously tracks position. The API returns latitude, longitude, altitude, accuracy, and other location data. Geolocation is useful for mapping applications, location-based services, and finding nearby places. Privacy is important - users must grant permission for location access.",
          syntax: "navigator.geolocation.getCurrentPosition(success, error, options)\nnavigator.geolocation.watchPosition(success, error, options)",
          examples: [
            {
              title: "HTML Geolocation Example",
              description: "Getting user's location",
              code: `<!DOCTYPE html>
<html>
<body>
  <h2>Geolocation API</h2>
  <button onclick="getLocation()">Get My Location</button>
  <p id="demo"></p>
  
  <script>
    function getLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
      } else {
        document.getElementById("demo").innerHTML = 
          "Geolocation is not supported by this browser.";
      }
    }
    
    function showPosition(position) {
      document.getElementById("demo").innerHTML = 
        "Latitude: " + position.coords.latitude + "<br>" +
        "Longitude: " + position.coords.longitude;
    }
    
    function showError(error) {
      switch(error.code) {
        case error.PERMISSION_DENIED:
          document.getElementById("demo").innerHTML = "User denied the request for Geolocation.";
          break;
        case error.POSITION_UNAVAILABLE:
          document.getElementById("demo").innerHTML = "Location information is unavailable.";
          break;
        case error.TIMEOUT:
          document.getElementById("demo").innerHTML = "The request to get user location timed out.";
          break;
      }
    }
  </script>
</body>
</html>`,
            },
          ],
          practiceQuestions: [
            {
              question: "What object provides geolocation services?",
              type: "fill",
              starterCode: `navigator.___.getCurrentPosition()`,
              answer: "geolocation",
            },
            {
              question: "What method gets the current position once?",
              type: "fill",
              starterCode: `navigator.geolocation.___()`,
              answer: "getCurrentPosition",
            },
            {
              question: "Does geolocation require user permission?",
              type: "predict",
              starterCode: `navigator.geolocation.getCurrentPosition()`,
              answer: "Yes, user must grant permission",
            },
          ],
        },
        {
          id: "html-drag-drop",
          title: "HTML Drag and Drop",
          explanation: "HTML5 Drag and Drop API allows elements to be draggable and droppable. Elements become draggable with the draggable='true' attribute. Drag events include dragstart, drag, dragend, dragenter, dragover, dragleave, and drop. The dataTransfer object stores data during drag operations. Drag and drop enables intuitive user interfaces for reordering lists, uploading files, and organizing content. It's widely used in modern web applications for better user experience.",
          syntax: "Draggable: <div draggable='true'>Drag me</div>\n\nEvents: ondragstart, ondrag, ondragend, ondragenter, ondragover, ondrop",
          examples: [
            {
              title: "HTML Drag and Drop Example",
              description: "Creating draggable and droppable elements",
              code: `<!DOCTYPE html>
<html>
<body>
  <div id="div1" ondrop="drop(event)" ondragover="allowDrop(event)" style="width:200px;height:200px;border:1px solid black;padding:10px;">
    Drop here
  </div>
  
  <img id="drag1" src="image.jpg" draggable="true" ondragstart="drag(event)" width="100" height="100">
  
  <script>
    function allowDrop(ev) {
      ev.preventDefault();
    }
    
    function drag(ev) {
      ev.dataTransfer.setData("text", ev.target.id);
    }
    
    function drop(ev) {
      ev.preventDefault();
      var data = ev.dataTransfer.getData("text");
      ev.target.appendChild(document.getElementById(data));
    }
  </script>
</body>
</html>`,
            },
          ],
          practiceQuestions: [
            {
              question: "What attribute makes an element draggable?",
              type: "fill",
              starterCode: `<div ___="true">Drag me</div>`,
              answer: "draggable",
            },
            {
              question: "What event fires when dragging starts?",
              type: "fill",
              starterCode: `ondrag___="drag(event)"`,
              answer: "start",
            },
            {
              question: "What object stores data during drag operations?",
              type: "predict",
              starterCode: `ev.dataTransfer.setData()`,
              answer: "dataTransfer",
            },
          ],
        },
        {
          id: "html-web-storage",
          title: "HTML Web Storage",
          explanation: "HTML5 Web Storage provides two objects for storing data locally: localStorage and sessionStorage. localStorage stores data with no expiration date, persisting even after the browser is closed. sessionStorage stores data for one session, cleared when the browser tab is closed. Both store key-value pairs as strings. Methods include setItem(), getItem(), removeItem(), and clear(). Web Storage is more secure and can store more data than cookies. It's useful for saving user preferences, shopping cart data, and application state.",
          syntax: "localStorage.setItem('key', 'value')\nlocalStorage.getItem('key')\nlocalStorage.removeItem('key')\nlocalStorage.clear()\n\nsessionStorage.setItem('key', 'value')\nsessionStorage.getItem('key')",
          examples: [
            {
              title: "HTML Web Storage Example",
              description: "Using localStorage and sessionStorage",
              code: `<!DOCTYPE html>
<html>
<body>
  <h2>Local Storage</h2>
  <input type="text" id="localInput">
  <button onclick="saveLocal()">Save to LocalStorage</button>
  <button onclick="loadLocal()">Load from LocalStorage</button>
  <button onclick="clearLocal()">Clear LocalStorage</button>
  <p id="localOutput"></p>
  
  <h2>Session Storage</h2>
  <input type="text" id="sessionInput">
  <button onclick="saveSession()">Save to SessionStorage</button>
  <button onclick="loadSession()">Load from SessionStorage</button>
  <p id="sessionOutput"></p>
  
  <script>
    // Local Storage
    function saveLocal() {
      localStorage.setItem("data", document.getElementById("localInput").value);
    }
    function loadLocal() {
      document.getElementById("localOutput").innerHTML = localStorage.getItem("data");
    }
    function clearLocal() {
      localStorage.clear();
    }
    
    // Session Storage
    function saveSession() {
      sessionStorage.setItem("data", document.getElementById("sessionInput").value);
    }
    function loadSession() {
      document.getElementById("sessionOutput").innerHTML = sessionStorage.getItem("data");
    }
  </script>
</body>
</html>`,
            },
          ],
          practiceQuestions: [
            {
              question: "What stores data permanently in the browser?",
              type: "fill",
              starterCode: `___.setItem('key', 'value')`,
              answer: "localStorage",
            },
            {
              question: "What stores data for one session only?",
              type: "fill",
              starterCode: `___.setItem('key', 'value')`,
              answer: "sessionStorage",
            },
            {
              question: "What method retrieves stored data?",
              type: "fill",
              starterCode: `localStorage.___('key')`,
              answer: "getItem",
            },
          ],
        },
        {
          id: "html-web-workers",
          title: "HTML Web Workers",
          explanation: "HTML5 Web Workers allow JavaScript to run in background threads, preventing blocking of the main UI thread. Workers are created using new Worker('worker.js') and communicate with the main thread via postMessage() and onmessage events. Workers can perform heavy computations, data processing, and other tasks without freezing the browser. Workers don't have access to the DOM, window object, or document object. They're useful for CPU-intensive tasks, image processing, and maintaining responsive user interfaces.",
          syntax: "var worker = new Worker('worker.js')\nworker.postMessage(data)\nworker.onmessage = function(event) { ... }\nworker.terminate()",
          examples: [
            {
              title: "HTML Web Workers Example",
              description: "Using web workers for background processing",
              code: `<!DOCTYPE html>
<html>
<body>
  <h2>Web Worker</h2>
  <p>Count: <output id="result"></output></p>
  <button onclick="startWorker()">Start Worker</button>
  <button onclick="stopWorker()">Stop Worker</button>
  
  <script>
    var w;
    
    function startWorker() {
      if (typeof(Worker) !== "undefined") {
        if (typeof(w) == "undefined") {
          w = new Worker("worker.js");
        }
        w.onmessage = function(event) {
          document.getElementById("result").innerHTML = event.data;
        };
      } else {
        document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Workers.";
      }
    }
    
    function stopWorker() {
      w.terminate();
      w = undefined;
    }
  </script>
  
  <!-- worker.js file content:
  var i = 0;
  function timedCount() {
    i = i + 1;
    postMessage(i);
    setTimeout("timedCount()", 500);
  }
  timedCount();
  -->
</body>
</html>`,
            },
          ],
          practiceQuestions: [
            {
              question: "What creates a web worker?",
              type: "fill",
              starterCode: `var worker = new ___('worker.js')`,
              answer: "Worker",
            },
            {
              question: "How do workers communicate with the main thread?",
              type: "fill",
              starterCode: `worker.___('data')`,
              answer: "postMessage",
            },
            {
              question: "Do workers have access to the DOM?",
              type: "predict",
              starterCode: `Workers run in background threads`,
              answer: "No, workers cannot access the DOM",
            },
          ],
        },
        {
          id: "html-sse",
          title: "HTML SSE",
          explanation: "Server-Sent Events (SSE) allows a web page to receive updates from a server automatically. SSE is simpler than WebSockets and is unidirectional (server to client). It's created using new EventSource('url'). Events are received through the onmessage event handler. SSE is useful for real-time updates like news feeds, stock prices, social media feeds, and live notifications. The server sends data in text/event-stream format. SSE automatically reconnects if the connection is lost.",
          syntax: "var source = new EventSource('events.php')\nsource.onmessage = function(event) { ... }\nsource.close()",
          examples: [
            {
              title: "HTML SSE Example",
              description: "Receiving server-sent events",
              code: `<!DOCTYPE html>
<html>
<body>
  <h2>Server-Sent Events</h2>
  <div id="result"></div>
  
  <script>
    if (typeof(EventSource) !== "undefined") {
      var source = new EventSource("events.php");
      source.onmessage = function(event) {
        document.getElementById("result").innerHTML += event.data + "<br>";
      };
    } else {
      document.getElementById("result").innerHTML = 
        "Sorry, your browser does not support server-sent events.";
    }
  </script>
  
  <!-- events.php example:
  <?php
  header('Content-Type: text/event-stream');
  header('Cache-Control: no-cache');
  
  $time = date('r');
  echo "data: The server time is: {$time}\n\n";
  flush();
  ?>
  -->
</body>
</html>`,
            },
          ],
          practiceQuestions: [
            {
              question: "What creates a server-sent events connection?",
              type: "fill",
              starterCode: `var source = new ___('events.php')`,
              answer: "EventSource",
            },
            {
              question: "What event receives messages from the server?",
              type: "fill",
              starterCode: `source.on___ = function(event) { ... }`,
              answer: "message",
            },
            {
              question: "Is SSE bidirectional or unidirectional?",
              type: "predict",
              starterCode: `Server-Sent Events`,
              answer: "Unidirectional (server to client)",
            },
          ],
        },
      ],
    },
    {
      id: "examples-practice",
      title: "HTML Examples & Practice",
      topics: [
        {
          id: "html-examples",
          title: "HTML Examples",
          explanation: "HTML examples demonstrate real-world usage of HTML elements and concepts. Examples include basic page structure, forms, tables, lists, images, links, and more complex layouts. Studying examples helps understand how HTML elements work together to create complete web pages. Examples range from simple beginner tutorials to advanced techniques. Practicing with examples reinforces learning and helps build practical skills.",
          syntax: "Examples demonstrate HTML in action with complete, working code snippets",
          examples: [
            {
              title: "HTML Examples Collection",
              description: "Various HTML examples for learning",
              code: `<!DOCTYPE html>
<html>
<head>
  <title>HTML Examples</title>
</head>
<body>
  <!-- Example 1: Basic Structure -->
  <header>
    <h1>My Website</h1>
  </header>
  
  <!-- Example 2: Navigation -->
  <nav>
    <a href="#home">Home</a>
    <a href="#about">About</a>
    <a href="#contact">Contact</a>
  </nav>
  
  <!-- Example 3: Content Sections -->
  <main>
    <section>
      <h2>Welcome</h2>
      <p>This is an example HTML page.</p>
    </section>
  </main>
  
  <footer>
    <p>&copy; 2024 My Website</p>
  </footer>
</body>
</html>`,
            },
          ],
          practiceQuestions: [
            {
              question: "Why are HTML examples useful?",
              type: "predict",
              starterCode: `Examples show HTML in action`,
              answer: "They demonstrate real-world usage and help understand concepts",
            },
            {
              question: "What do examples help reinforce?",
              type: "predict",
              starterCode: `Practicing with examples`,
              answer: "Learning and practical skills",
            },
            {
              question: "What range do examples cover?",
              type: "predict",
              starterCode: `From simple to advanced`,
              answer: "From beginner tutorials to advanced techniques",
            },
          ],
        },
        {
          id: "html-editor",
          title: "HTML Editor",
          explanation: "An HTML editor is a tool for writing and editing HTML code. Popular editors include Visual Studio Code, Sublime Text, Atom, Notepad++, and online editors like CodePen and JSFiddle. HTML editors provide features like syntax highlighting, auto-completion, code formatting, live preview, and error detection. Using a good editor improves productivity and helps write cleaner, error-free HTML code. Many editors support HTML, CSS, and JavaScript together.",
          syntax: "HTML editors help write and edit HTML code with helpful features",
          examples: [
            {
              title: "HTML Editor Usage",
              description: "Using an HTML editor to write code",
              code: `<!DOCTYPE html>
<html>
<head>
  <title>HTML Editor Example</title>
</head>
<body>
  <!-- HTML editors provide:
  - Syntax highlighting
  - Auto-completion
  - Code formatting
  - Live preview
  - Error detection
  -->
  
  <h1>Welcome</h1>
  <p>Write your HTML code in an editor</p>
  <p>Save as .html file</p>
  <p>Open in browser to view</p>
</body>
</html>`,
            },
          ],
          practiceQuestions: [
            {
              question: "What is an HTML editor used for?",
              type: "predict",
              starterCode: `Tool for writing HTML code`,
              answer: "Writing and editing HTML code",
            },
            {
              question: "What feature highlights code syntax?",
              type: "predict",
              starterCode: `Syntax highlighting`,
              answer: "Syntax highlighting",
            },
            {
              question: "What is a popular HTML editor?",
              type: "fill",
              starterCode: `Visual Studio ___`,
              answer: "Code",
            },
          ],
        },
        {
          id: "html-quiz",
          title: "HTML Quiz",
          explanation: "HTML quizzes test your knowledge and understanding of HTML concepts, elements, attributes, and best practices. Quizzes typically include multiple-choice questions, fill-in-the-blank exercises, and code completion challenges. Taking quizzes helps identify areas that need more practice and reinforces learning. Regular quizzes improve retention and help track progress. They're an effective way to prepare for interviews and certifications.",
          syntax: "Quizzes test HTML knowledge through various question formats",
          examples: [
            {
              title: "HTML Quiz Example",
              description: "Sample HTML quiz questions",
              code: `<!DOCTYPE html>
<html>
<body>
  <h1>HTML Quiz</h1>
  
  <form>
    <h3>Question 1: What tag creates a heading?</h3>
    <input type="radio" name="q1" value="a"> &lt;p&gt;
    <input type="radio" name="q1" value="b"> &lt;h1&gt;
    <input type="radio" name="q1" value="c"> &lt;div&gt;
    
    <h3>Question 2: What attribute specifies an image source?</h3>
    <input type="radio" name="q2" value="a"> href
    <input type="radio" name="q2" value="b"> src
    <input type="radio" name="q2" value="c"> link
    
    <h3>Question 3: Complete: &lt;___&gt; creates a link</h3>
    <input type="text" name="q3" placeholder="Enter tag name">
    
    <br><br>
    <button type="submit">Submit Quiz</button>
  </form>
</body>
</html>`,
            },
          ],
          practiceQuestions: [
            {
              question: "What do HTML quizzes test?",
              type: "predict",
              starterCode: `Quizzes test knowledge`,
              answer: "HTML concepts, elements, and best practices",
            },
            {
              question: "How do quizzes help learning?",
              type: "predict",
              starterCode: `Quizzes reinforce learning`,
              answer: "They identify areas needing practice and reinforce learning",
            },
            {
              question: "What format do quizzes use?",
              type: "predict",
              starterCode: `Multiple choice, fill-in-the-blank`,
              answer: "Multiple-choice, fill-in-the-blank, code completion",
            },
          ],
        },
        {
          id: "html-exercises",
          title: "HTML Exercises",
          explanation: "HTML exercises provide hands-on practice with HTML coding. Exercises range from simple tasks like creating a basic page to complex projects like building a complete website. Exercises help apply theoretical knowledge to practical scenarios. Common exercises include creating forms, tables, layouts, navigation menus, and responsive designs. Regular practice with exercises builds confidence and improves coding skills. Exercises often include solutions for comparison and learning.",
          syntax: "Exercises provide coding challenges to practice HTML skills",
          examples: [
            {
              title: "HTML Exercise Example",
              description: "Sample HTML exercise tasks",
              code: `<!DOCTYPE html>
<html>
<head>
  <title>HTML Exercises</title>
</head>
<body>
  <h1>Exercise 1: Create a Basic Page</h1>
  <p>Create a page with header, navigation, main content, and footer.</p>
  
  <h1>Exercise 2: Build a Form</h1>
  <p>Create a registration form with name, email, password fields.</p>
  
  <h1>Exercise 3: Create a Table</h1>
  <p>Build a table with 3 columns and 5 rows of data.</p>
  
  <h1>Exercise 4: Add Images</h1>
  <p>Insert images with proper alt text and styling.</p>
  
  <h1>Exercise 5: Build Navigation</h1>
  <p>Create a navigation menu with links to different pages.</p>
</body>
</html>`,
            },
          ],
          practiceQuestions: [
            {
              question: "What do HTML exercises provide?",
              type: "predict",
              starterCode: `Hands-on practice`,
              answer: "Hands-on practice with HTML coding",
            },
            {
              question: "What do exercises help apply?",
              type: "predict",
              starterCode: `Apply theoretical knowledge`,
              answer: "Theoretical knowledge to practical scenarios",
            },
            {
              question: "What do exercises build?",
              type: "predict",
              starterCode: `Build confidence`,
              answer: "Confidence and coding skills",
            },
          ],
        },
        {
          id: "html-website",
          title: "HTML Website",
          explanation: "Building a complete HTML website involves creating multiple interconnected pages with consistent structure, navigation, and styling. A website typically includes a homepage, about page, contact page, and content pages. Key considerations include semantic HTML structure, accessibility, responsive design, SEO optimization, and clean code organization. Websites use HTML for structure, CSS for styling, and JavaScript for interactivity. Building a website is a comprehensive project that demonstrates mastery of HTML concepts.",
          syntax: "Websites consist of multiple HTML pages linked together with navigation",
          examples: [
            {
              title: "HTML Website Structure",
              description: "Basic website structure with multiple pages",
              code: `<!-- index.html -->
<!DOCTYPE html>
<html>
<head>
  <title>Home - My Website</title>
</head>
<body>
  <header>
    <nav>
      <a href="index.html">Home</a>
      <a href="about.html">About</a>
      <a href="contact.html">Contact</a>
    </nav>
  </header>
  
  <main>
    <h1>Welcome to My Website</h1>
    <p>This is the homepage.</p>
  </main>
  
  <footer>
    <p>&copy; 2024 My Website</p>
  </footer>
</body>
</html>

<!-- about.html -->
<!DOCTYPE html>
<html>
<head>
  <title>About - My Website</title>
</head>
<body>
  <header>
    <nav>
      <a href="index.html">Home</a>
      <a href="about.html">About</a>
      <a href="contact.html">Contact</a>
    </nav>
  </header>
  
  <main>
    <h1>About Us</h1>
    <p>Learn more about our website.</p>
  </main>
  
  <footer>
    <p>&copy; 2024 My Website</p>
  </footer>
</body>
</html>`,
            },
          ],
          practiceQuestions: [
            {
              question: "What does a website consist of?",
              type: "predict",
              starterCode: `Multiple interconnected pages`,
              answer: "Multiple interconnected HTML pages",
            },
            {
              question: "What is important for website structure?",
              type: "predict",
              starterCode: `Semantic HTML, accessibility`,
              answer: "Semantic HTML, accessibility, responsive design",
            },
            {
              question: "What technologies are used in websites?",
              type: "predict",
              starterCode: `HTML, CSS, JavaScript`,
              answer: "HTML for structure, CSS for styling, JavaScript for interactivity",
            },
          ],
        },
        {
          id: "html-syllabus",
          title: "HTML Syllabus",
          explanation: "An HTML syllabus outlines the topics, concepts, and skills covered in an HTML course or learning path. A typical syllabus includes HTML basics, elements, attributes, forms, tables, semantic HTML, accessibility, and best practices. The syllabus provides a structured learning path from beginner to advanced topics. It helps learners understand what they'll study and track their progress. A well-organized syllabus ensures comprehensive coverage of HTML concepts.",
          syntax: "A syllabus organizes HTML topics in a structured learning sequence",
          examples: [
            {
              title: "HTML Syllabus Example",
              description: "Sample HTML course syllabus",
              code: `<!DOCTYPE html>
<html>
<head>
  <title>HTML Syllabus</title>
</head>
<body>
  <h1>HTML Course Syllabus</h1>
  
  <h2>Week 1: HTML Basics</h2>
  <ul>
    <li>Introduction to HTML</li>
    <li>HTML Structure</li>
    <li>Basic Elements</li>
  </ul>
  
  <h2>Week 2: HTML Elements</h2>
  <ul>
    <li>Headings and Paragraphs</li>
    <li>Links and Images</li>
    <li>Lists and Tables</li>
  </ul>
  
  <h2>Week 3: Forms and Input</h2>
  <ul>
    <li>Form Elements</li>
    <li>Input Types</li>
    <li>Form Validation</li>
  </ul>
  
  <h2>Week 4: Advanced HTML</h2>
  <ul>
    <li>Semantic HTML</li>
    <li>Accessibility</li>
    <li>Best Practices</li>
  </ul>
</body>
</html>`,
            },
          ],
          practiceQuestions: [
            {
              question: "What does an HTML syllabus outline?",
              type: "predict",
              starterCode: `Topics and concepts`,
              answer: "Topics, concepts, and skills covered in HTML learning",
            },
            {
              question: "What does a syllabus provide?",
              type: "predict",
              starterCode: `Structured learning path`,
              answer: "A structured learning path from beginner to advanced",
            },
            {
              question: "What does a syllabus help learners do?",
              type: "predict",
              starterCode: `Track progress`,
              answer: "Understand what they'll study and track progress",
            },
          ],
        },
        {
          id: "html-study-plan",
          title: "HTML Study Plan",
          explanation: "An HTML study plan provides a structured schedule for learning HTML effectively. A good study plan includes daily or weekly goals, practice time, review sessions, and project work. It helps maintain consistency and track progress. Study plans typically start with basics and gradually progress to advanced topics. They include time for reading, coding practice, exercises, and building projects. Following a study plan ensures comprehensive learning and skill development.",
          syntax: "A study plan schedules HTML learning activities over time",
          examples: [
            {
              title: "HTML Study Plan Example",
              description: "Sample HTML study schedule",
              code: `<!DOCTYPE html>
<html>
<head>
  <title>HTML Study Plan</title>
</head>
<body>
  <h1>HTML Study Plan - 4 Weeks</h1>
  
  <h2>Week 1: Foundation</h2>
  <ul>
    <li>Day 1-2: HTML Basics (2 hours/day)</li>
    <li>Day 3-4: Elements and Attributes (2 hours/day)</li>
    <li>Day 5-7: Practice Exercises (1 hour/day)</li>
  </ul>
  
  <h2>Week 2: Core Concepts</h2>
  <ul>
    <li>Day 1-2: Forms and Tables (2 hours/day)</li>
    <li>Day 3-4: Links and Images (2 hours/day)</li>
    <li>Day 5-7: Build a Simple Page (2 hours/day)</li>
  </ul>
  
  <h2>Week 3: Advanced Topics</h2>
  <ul>
    <li>Day 1-2: Semantic HTML (2 hours/day)</li>
    <li>Day 3-4: Accessibility (2 hours/day)</li>
    <li>Day 5-7: Responsive Design Basics (2 hours/day)</li>
  </ul>
  
  <h2>Week 4: Projects</h2>
  <ul>
    <li>Day 1-7: Build Complete Website (3 hours/day)</li>
  </ul>
</body>
</html>`,
            },
          ],
          practiceQuestions: [
            {
              question: "What does a study plan provide?",
              type: "predict",
              starterCode: `Structured schedule`,
              answer: "A structured schedule for learning HTML",
            },
            {
              question: "What does a study plan help maintain?",
              type: "predict",
              starterCode: `Consistency`,
              answer: "Consistency and track progress",
            },
            {
              question: "What should a study plan include?",
              type: "predict",
              starterCode: `Practice time, projects`,
              answer: "Daily goals, practice time, review sessions, and projects",
            },
          ],
        },
        {
          id: "html-interview-prep",
          title: "HTML Interview Prep",
          explanation: "HTML interview preparation involves studying common HTML concepts, elements, attributes, and best practices that employers test. Common interview topics include semantic HTML, accessibility, form handling, HTML5 features, browser compatibility, and code quality. Preparation includes practicing coding challenges, reviewing HTML specifications, understanding best practices, and being able to explain HTML concepts clearly. Mock interviews and practice questions help build confidence for real interviews.",
          syntax: "Interview prep focuses on commonly tested HTML knowledge and skills",
          examples: [
            {
              title: "HTML Interview Prep Topics",
              description: "Common HTML interview topics",
              code: `<!DOCTYPE html>
<html>
<head>
  <title>HTML Interview Prep</title>
</head>
<body>
  <h1>HTML Interview Preparation Topics</h1>
  
  <h2>Core Concepts</h2>
  <ul>
    <li>HTML5 semantic elements</li>
    <li>Form elements and validation</li>
    <li>Accessibility (ARIA, alt text)</li>
    <li>SEO best practices</li>
  </ul>
  
  <h2>Technical Skills</h2>
  <ul>
    <li>Writing clean, semantic HTML</li>
    <li>Understanding HTML structure</li>
    <li>Browser compatibility</li>
    <li>Performance optimization</li>
  </ul>
  
  <h2>Practice Areas</h2>
  <ul>
    <li>Coding challenges</li>
    <li>Code review exercises</li>
    <li>Explain concepts clearly</li>
    <li>Debug HTML issues</li>
  </ul>
</body>
</html>`,
            },
          ],
          practiceQuestions: [
            {
              question: "What do HTML interviews commonly test?",
              type: "predict",
              starterCode: `Semantic HTML, accessibility`,
              answer: "Semantic HTML, accessibility, form handling, HTML5 features",
            },
            {
              question: "What helps prepare for interviews?",
              type: "predict",
              starterCode: `Practice questions, mock interviews`,
              answer: "Practicing coding challenges and reviewing HTML concepts",
            },
            {
              question: "What should you be able to do in interviews?",
              type: "predict",
              starterCode: `Explain concepts clearly`,
              answer: "Explain HTML concepts clearly and write clean code",
            },
          ],
        },
        {
          id: "html-bootcamp",
          title: "HTML Bootcamp",
          explanation: "An HTML bootcamp is an intensive, accelerated learning program focused on HTML and web development. Bootcamps typically cover HTML fundamentals, advanced concepts, best practices, and real-world projects in a condensed timeframe. They provide structured learning, hands-on practice, mentorship, and project-based learning. Bootcamps are designed to quickly build practical HTML skills and prepare for web development careers. They often include CSS and JavaScript as well.",
          syntax: "Bootcamps provide intensive HTML training in a short timeframe",
          examples: [
            {
              title: "HTML Bootcamp Structure",
              description: "Typical bootcamp curriculum",
              code: `<!DOCTYPE html>
<html>
<head>
  <title>HTML Bootcamp</title>
</head>
<body>
  <h1>HTML Bootcamp - 4 Weeks</h1>
  
  <h2>Week 1: HTML Fundamentals</h2>
  <ul>
    <li>HTML Basics and Structure</li>
    <li>Elements and Attributes</li>
    <li>Forms and Tables</li>
    <li>Daily Projects</li>
  </ul>
  
  <h2>Week 2: Advanced HTML</h2>
  <ul>
    <li>Semantic HTML5</li>
    <li>Accessibility</li>
    <li>HTML APIs</li>
    <li>Complex Projects</li>
  </ul>
  
  <h2>Week 3: Integration</h2>
  <ul>
    <li>HTML with CSS</li>
    <li>HTML with JavaScript</li>
    <li>Responsive Design</li>
    <li>Full Website Project</li>
  </ul>
  
  <h2>Week 4: Portfolio</h2>
  <ul>
    <li>Build Portfolio Website</li>
    <li>Code Review</li>
    <li>Best Practices</li>
    <li>Career Preparation</li>
  </ul>
</body>
</html>`,
            },
          ],
          practiceQuestions: [
            {
              question: "What is an HTML bootcamp?",
              type: "predict",
              starterCode: `Intensive learning program`,
              answer: "An intensive, accelerated HTML learning program",
            },
            {
              question: "What do bootcamps provide?",
              type: "predict",
              starterCode: `Structured learning, projects`,
              answer: "Structured learning, hands-on practice, and projects",
            },
            {
              question: "What is the goal of a bootcamp?",
              type: "predict",
              starterCode: `Build practical skills quickly`,
              answer: "Quickly build practical HTML skills for web development",
            },
          ],
        },
        {
          id: "html-certificate",
          title: "HTML Certificate",
          explanation: "An HTML certificate validates your HTML knowledge and skills through a recognized credential. Certificates are earned by completing courses, passing exams, or demonstrating HTML proficiency through projects. They can enhance resumes, demonstrate commitment to learning, and show employers your HTML expertise. Certificates may be from online platforms, educational institutions, or professional organizations. They provide proof of HTML competency and can help advance careers in web development.",
          syntax: "Certificates validate HTML knowledge through courses or exams",
          examples: [
            {
              title: "HTML Certificate Information",
              description: "About HTML certificates",
              code: `<!DOCTYPE html>
<html>
<head>
  <title>HTML Certificate</title>
</head>
<body>
  <h1>HTML Certificate Program</h1>
  
  <section>
    <h2>Certificate Requirements</h2>
    <ul>
      <li>Complete HTML course modules</li>
      <li>Pass HTML knowledge exam</li>
      <li>Build portfolio project</li>
      <li>Demonstrate HTML proficiency</li>
    </ul>
  </section>
  
  <section>
    <h2>Certificate Benefits</h2>
    <ul>
      <li>Validate HTML skills</li>
      <li>Enhance resume</li>
      <li>Show expertise to employers</li>
      <li>Advance web development career</li>
    </ul>
  </section>
  
  <section>
    <h2>How to Earn</h2>
    <ul>
      <li>Complete online courses</li>
      <li>Pass certification exams</li>
      <li>Submit portfolio projects</li>
      <li>Meet proficiency requirements</li>
    </ul>
  </section>
</body>
</html>`,
            },
          ],
          practiceQuestions: [
            {
              question: "What does an HTML certificate validate?",
              type: "predict",
              starterCode: `HTML knowledge and skills`,
              answer: "HTML knowledge and skills",
            },
            {
              question: "How are certificates earned?",
              type: "predict",
              starterCode: `Complete courses, pass exams`,
              answer: "By completing courses, passing exams, or demonstrating proficiency",
            },
            {
              question: "What are certificate benefits?",
              type: "predict",
              starterCode: `Enhance resume, show expertise`,
              answer: "Enhance resume and demonstrate HTML expertise to employers",
            },
          ],
        },
        {
          id: "html-summary",
          title: "HTML Summary",
          explanation: "An HTML summary provides a comprehensive overview of HTML concepts, elements, and best practices. It covers HTML structure, common elements, attributes, forms, tables, semantic HTML, accessibility, and modern HTML5 features. Summaries help review key concepts quickly and serve as reference material. They're useful for exam preparation, interviews, and quick lookups. A good summary organizes information logically and highlights the most important HTML concepts.",
          syntax: "A summary provides a concise overview of HTML knowledge",
          examples: [
            {
              title: "HTML Summary",
              description: "Comprehensive HTML overview",
              code: `<!DOCTYPE html>
<html>
<head>
  <title>HTML Summary</title>
</head>
<body>
  <h1>HTML Summary</h1>
  
  <section>
    <h2>HTML Basics</h2>
    <ul>
      <li>HTML = HyperText Markup Language</li>
      <li>Structure: &lt;!DOCTYPE html&gt;, &lt;html&gt;, &lt;head&gt;, &lt;body&gt;</li>
      <li>Elements: opening tag, content, closing tag</li>
    </ul>
  </section>
  
  <section>
    <h2>Common Elements</h2>
    <ul>
      <li>Headings: &lt;h1&gt; to &lt;h6&gt;</li>
      <li>Paragraphs: &lt;p&gt;</li>
      <li>Links: &lt;a href=""&gt;</li>
      <li>Images: &lt;img src="" alt=""&gt;</li>
      <li>Lists: &lt;ul&gt;, &lt;ol&gt;, &lt;li&gt;</li>
    </ul>
  </section>
  
  <section>
    <h2>Forms</h2>
    <ul>
      <li>&lt;form&gt; element</li>
      <li>Input types: text, email, password, submit</li>
      <li>Attributes: name, value, placeholder, required</li>
    </ul>
  </section>
  
  <section>
    <h2>Best Practices</h2>
    <ul>
      <li>Use semantic HTML5 elements</li>
      <li>Ensure accessibility</li>
      <li>Write clean, organized code</li>
      <li>Validate HTML</li>
    </ul>
  </section>
</body>
</html>`,
            },
          ],
          practiceQuestions: [
            {
              question: "What does an HTML summary provide?",
              type: "predict",
              starterCode: `Comprehensive overview`,
              answer: "A comprehensive overview of HTML concepts",
            },
            {
              question: "What are summaries useful for?",
              type: "predict",
              starterCode: `Review, reference`,
              answer: "Review, exam preparation, interviews, and quick lookups",
            },
            {
              question: "What should a summary highlight?",
              type: "predict",
              starterCode: `Most important concepts`,
              answer: "The most important HTML concepts",
            },
          ],
        },
        {
          id: "html-accessibility",
          title: "HTML Accessibility",
          explanation: "HTML accessibility ensures web content is usable by people with disabilities. Key practices include using semantic HTML elements, providing alt text for images, using proper heading hierarchy, ensuring keyboard navigation, adding ARIA attributes when needed, and maintaining sufficient color contrast. Accessible HTML benefits all users and is often required by law. Screen readers, keyboard navigation, and assistive technologies rely on proper HTML structure. Accessibility is an essential part of modern web development.",
          syntax: "Accessible HTML uses semantic elements, alt text, ARIA attributes, and proper structure",
          examples: [
            {
              title: "HTML Accessibility Example",
              description: "Creating accessible HTML content",
              code: `<!DOCTYPE html>
<html lang="en">
<head>
  <title>Accessible HTML Page</title>
</head>
<body>
  <!-- Semantic HTML structure -->
  <header>
    <nav aria-label="Main navigation">
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
      </ul>
    </nav>
  </header>
  
  <main>
    <!-- Proper heading hierarchy -->
    <h1>Page Title</h1>
    <h2>Section Title</h2>
    
    <!-- Image with alt text -->
    <img src="photo.jpg" alt="Description of the image">
    
    <!-- Form with labels -->
    <form>
      <label for="name">Name:</label>
      <input type="text" id="name" name="name" required>
      
      <label for="email">Email:</label>
      <input type="email" id="email" name="email" required>
      
      <button type="submit">Submit</button>
    </form>
    
    <!-- ARIA attributes for screen readers -->
    <button aria-label="Close dialog">×</button>
    <div role="alert" aria-live="polite">Important message</div>
  </main>
  
  <footer>
    <p>&copy; 2024 Website</p>
  </footer>
</body>
</html>`,
            },
          ],
          practiceQuestions: [
            {
              question: "What is HTML accessibility?",
              type: "predict",
              starterCode: `Making content usable for all`,
              answer: "Ensuring web content is usable by people with disabilities",
            },
            {
              question: "What should images always have?",
              type: "fill",
              starterCode: `<img src="photo.jpg" ___="Description">`,
              answer: "alt",
            },
            {
              question: "What do semantic HTML elements improve?",
              type: "predict",
              starterCode: `Semantic elements`,
              answer: "Accessibility and screen reader support",
            },
          ],
        },
      ],
    },
    {
      id: "reference",
      title: "HTML References",
      topics: [
        {
          id: "html-tag-list",
          title: "HTML Tag List",
          explanation: "HTML tag lists provide a comprehensive reference of all HTML elements available. Common tags include structural elements (<html>, <head>, <body>, <header>, <nav>, <main>, <footer>), text elements (<h1>-<h6>, <p>, <span>, <strong>, <em>), media elements (<img>, <video>, <audio>), form elements (<form>, <input>, <button>, <select>), and many more. Each tag has specific attributes and usage. Tag lists help developers quickly find the right element for their needs and understand HTML capabilities.",
          syntax: "Common tags: <div>, <span>, <p>, <h1>-<h6>, <a>, <img>, <ul>, <ol>, <li>, <table>, <form>, <input>, <button>",
          examples: [
            {
              title: "HTML Tag List Reference",
              description: "Common HTML tags organized by category",
              code: `<!DOCTYPE html>
<html>
<body>
  <h1>HTML Tag List</h1>
  
  <h2>Structural Tags</h2>
  <ul>
    <li>&lt;html&gt; - Root element</li>
    <li>&lt;head&gt; - Document head</li>
    <li>&lt;body&gt; - Document body</li>
    <li>&lt;header&gt; - Header section</li>
    <li>&lt;footer&gt; - Footer section</li>
  </ul>
  
  <h2>Text Tags</h2>
  <ul>
    <li>&lt;h1&gt; to &lt;h6&gt; - Headings</li>
    <li>&lt;p&gt; - Paragraph</li>
    <li>&lt;span&gt; - Inline container</li>
    <li>&lt;strong&gt; - Bold text</li>
    <li>&lt;em&gt; - Italic text</li>
  </ul>
  
  <h2>Media Tags</h2>
  <ul>
    <li>&lt;img&gt; - Image</li>
    <li>&lt;video&gt; - Video</li>
    <li>&lt;audio&gt; - Audio</li>
  </ul>
  
  <h2>Form Tags</h2>
  <ul>
    <li>&lt;form&gt; - Form container</li>
    <li>&lt;input&gt; - Input field</li>
    <li>&lt;button&gt; - Button</li>
    <li>&lt;select&gt; - Dropdown</li>
  </ul>
</body>
</html>`,
            },
          ],
          practiceQuestions: [
            {
              question: "What tag creates a paragraph?",
              type: "fill",
              starterCode: `<___>Text</___>`,
              answer: "p",
            },
            {
              question: "What tag creates the largest heading?",
              type: "fill",
              starterCode: `<___>Heading</___>`,
              answer: "h1",
            },
            {
              question: "What tag embeds an image?",
              type: "fill",
              starterCode: `<___ src="photo.jpg">`,
              answer: "img",
            },
          ],
        },
        {
          id: "html-attributes-reference",
          title: "HTML Attributes Reference",
          explanation: "HTML attributes provide additional information about elements and modify their behavior. Common attributes include id (unique identifier), class (for styling), src (source URL), href (link destination), alt (alternative text), style (inline CSS), title (tooltip text), and data-* (custom data). Each element has specific attributes it supports. Attributes are always specified in the start tag as name='value' pairs. Understanding attributes is essential for effective HTML development.",
          syntax: "<element attribute='value' attribute2='value2'>\n\nCommon: id, class, src, href, alt, style, title, data-*, name, value, type, required",
          examples: [
            {
              title: "HTML Attributes Reference",
              description: "Common HTML attributes",
              code: `<!DOCTYPE html>
<html>
<body>
  <h1>HTML Attributes Reference</h1>
  
  <!-- ID attribute -->
  <div id="unique-id">Element with ID</div>
  
  <!-- Class attribute -->
  <p class="highlight">Element with class</p>
  
  <!-- Source attribute -->
  <img src="photo.jpg" alt="Photo description">
  
  <!-- Link attribute -->
  <a href="https://example.com" title="Visit Example">Link</a>
  
  <!-- Style attribute -->
  <div style="color: blue; font-size: 20px;">Styled element</div>
  
  <!-- Data attribute -->
  <div data-user="john" data-id="123">Custom data</div>
  
  <!-- Form attributes -->
  <input type="text" name="username" value="user" required>
  
  <!-- Media attributes -->
  <video src="video.mp4" controls width="640" height="360"></video>
</body>
</html>`,
            },
          ],
          practiceQuestions: [
            {
              question: "What attribute creates a unique identifier?",
              type: "fill",
              starterCode: `<div ___="header">Content</div>`,
              answer: "id",
            },
            {
              question: "What attribute specifies a link destination?",
              type: "fill",
              starterCode: `<a ___="page.html">Link</a>`,
              answer: "href",
            },
            {
              question: "What attribute provides alternative text for images?",
              type: "fill",
              starterCode: `<img src="photo.jpg" ___="Description">`,
              answer: "alt",
            },
          ],
        },
        {
          id: "html-global-attributes",
          title: "HTML Global Attributes",
          explanation: "Global attributes are attributes that can be used on any HTML element. Common global attributes include id (unique identifier), class (for styling), style (inline CSS), title (tooltip), lang (language), dir (text direction), hidden (hides element), tabindex (tab order), contenteditable (makes content editable), and data-* (custom data attributes). Global attributes provide consistent functionality across all HTML elements and are essential for accessibility, styling, and interactivity.",
          syntax: "Global attributes work on any element:\nid, class, style, title, lang, dir, hidden, tabindex, contenteditable, data-*",
          examples: [
            {
              title: "HTML Global Attributes Example",
              description: "Using global attributes on various elements",
              code: `<!DOCTYPE html>
<html lang="en">
<body>
  <!-- ID (global) -->
  <div id="container">Content</div>
  
  <!-- Class (global) -->
  <p class="highlight">Text</p>
  
  <!-- Style (global) -->
  <h1 style="color: red;">Heading</h1>
  
  <!-- Title (global) -->
  <span title="Tooltip text">Hover me</span>
  
  <!-- Lang (global) -->
  <p lang="es">Hola mundo</p>
  
  <!-- Dir (global) -->
  <p dir="rtl">Right to left text</p>
  
  <!-- Hidden (global) -->
  <p hidden>Hidden content</p>
  
  <!-- Tabindex (global) -->
  <button tabindex="1">First</button>
  <button tabindex="2">Second</button>
  
  <!-- Contenteditable (global) -->
  <div contenteditable="true">Editable content</div>
  
  <!-- Data attributes (global) -->
  <div data-user="john" data-id="123">Custom data</div>
</body>
</html>`,
            },
          ],
          practiceQuestions: [
            {
              question: "What are global attributes?",
              type: "predict",
              starterCode: `Attributes usable on any element`,
              answer: "Attributes that can be used on any HTML element",
            },
            {
              question: "What global attribute hides an element?",
              type: "fill",
              starterCode: `<div ___>Hidden</div>`,
              answer: "hidden",
            },
            {
              question: "What global attribute makes content editable?",
              type: "fill",
              starterCode: `<div ___="true">Edit me</div>`,
              answer: "contenteditable",
            },
          ],
        },
        {
          id: "html-browser-support",
          title: "HTML Browser Support",
          explanation: "Browser support refers to which HTML features work in different browsers. Modern browsers (Chrome, Firefox, Safari, Edge) generally support HTML5 features well. Older browsers may not support newer HTML5 elements and attributes. Developers need to check browser compatibility when using advanced features. Tools like Can I Use help check feature support. Polyfills can add support for older browsers. Testing across browsers ensures websites work for all users.",
          syntax: "Check browser support before using HTML5 features\nUse feature detection and polyfills for older browsers",
          examples: [
            {
              title: "HTML Browser Support",
              description: "Understanding browser compatibility",
              code: `<!DOCTYPE html>
<html>
<head>
  <title>Browser Support</title>
</head>
<body>
  <h1>HTML Browser Support</h1>
  
  <h2>Modern Browsers (Good Support)</h2>
  <ul>
    <li>Chrome - Excellent HTML5 support</li>
    <li>Firefox - Excellent HTML5 support</li>
    <li>Safari - Good HTML5 support</li>
    <li>Edge - Excellent HTML5 support</li>
  </ul>
  
  <h2>Older Browsers (Limited Support)</h2>
  <ul>
    <li>IE11 - Limited HTML5 support</li>
    <li>Older versions - May need polyfills</li>
  </ul>
  
  <h2>Feature Detection</h2>
  <script>
    // Check if browser supports HTML5 video
    if (document.createElement('video').canPlayType) {
      console.log('HTML5 video supported');
    } else {
      console.log('HTML5 video not supported');
    }
  </script>
  
  <!-- Fallback for older browsers -->
  <video controls>
    <source src="video.mp4" type="video/mp4">
    <p>Your browser does not support HTML5 video.</p>
  </video>
</body>
</html>`,
            },
          ],
          practiceQuestions: [
            {
              question: "What does browser support refer to?",
              type: "predict",
              starterCode: `Which features work in browsers`,
              answer: "Which HTML features work in different browsers",
            },
            {
              question: "What can add support for older browsers?",
              type: "fill",
              starterCode: `Use ___ for older browsers`,
              answer: "polyfills",
            },
            {
              question: "Why is testing across browsers important?",
              type: "predict",
              starterCode: `Ensure websites work for all users`,
              answer: "To ensure websites work for all users",
            },
          ],
        },
        {
          id: "html-events",
          title: "HTML Events",
          explanation: "HTML events are actions that occur in the browser, such as clicks, form submissions, page loads, and keyboard input. Events can be handled with HTML event attributes (onclick, onsubmit, onload) or JavaScript event listeners. Common events include click, submit, load, change, focus, blur, mouseover, keydown, and many more. Events enable interactive web pages by responding to user actions. Modern development prefers JavaScript event listeners over inline event handlers for better separation of concerns.",
          syntax: "HTML: <element onclick='function()'>\nJavaScript: element.addEventListener('click', function)",
          examples: [
            {
              title: "HTML Events Example",
              description: "Using HTML events",
              code: `<!DOCTYPE html>
<html>
<body>
  <h1>HTML Events</h1>
  
  <!-- Click event -->
  <button onclick="alert('Clicked!')">Click Me</button>
  
  <!-- Form submit event -->
  <form onsubmit="alert('Submitted!'); return false;">
    <input type="text" name="data">
    <button type="submit">Submit</button>
  </form>
  
  <!-- Mouse events -->
  <div onmouseover="this.style.backgroundColor='yellow'" 
       onmouseout="this.style.backgroundColor='white'">
    Hover me
  </div>
  
  <!-- Input events -->
  <input type="text" onchange="alert('Changed!')" 
         onfocus="this.style.border='2px solid blue'"
         onblur="this.style.border='1px solid black'">
  
  <!-- Page load event -->
  <script>
    window.onload = function() {
      alert('Page loaded!');
    };
  </script>
  
  <!-- Modern JavaScript event listener -->
  <button id="modernBtn">Modern Button</button>
  <script>
    document.getElementById('modernBtn').addEventListener('click', function() {
      alert('Modern event handler!');
    });
  </script>
</body>
</html>`,
            },
          ],
          practiceQuestions: [
            {
              question: "What attribute handles click events?",
              type: "fill",
              starterCode: `<button ___="doSomething()">Click</button>`,
              answer: "onclick",
            },
            {
              question: "What event fires when a form is submitted?",
              type: "fill",
              starterCode: `<form ___="handleSubmit()">`,
              answer: "onsubmit",
            },
            {
              question: "What event fires when the page loads?",
              type: "fill",
              starterCode: `window.___ = function() { ... }`,
              answer: "onload",
            },
          ],
        },
        {
          id: "html-colors-reference",
          title: "HTML Colors Reference",
          explanation: "HTML colors can be specified using color names, RGB values, HEX codes, HSL values, or RGBA values. HTML supports 140 standard color names like red, blue, green, yellow, etc. RGB uses red, green, blue values from 0-255. HEX codes use hexadecimal values (#RRGGBB). HSL uses hue (0-360), saturation (0-100%), and lightness (0-100%). RGBA adds alpha transparency (0-1). Color references help developers choose and specify colors consistently across web pages.",
          syntax: "Color names: 'red', 'blue', 'green'\nRGB: rgb(255, 0, 0)\nHEX: #FF0000\nHSL: hsl(0, 100%, 50%)\nRGBA: rgba(255, 0, 0, 0.5)",
          examples: [
            {
              title: "HTML Colors Reference",
              description: "Different ways to specify colors",
              code: `<!DOCTYPE html>
<html>
<body>
  <h1>HTML Colors Reference</h1>
  
  <!-- Color names -->
  <p style="color: red;">Red text</p>
  <p style="color: blue;">Blue text</p>
  <p style="color: green;">Green text</p>
  
  <!-- RGB -->
  <p style="color: rgb(255, 0, 0);">RGB red</p>
  <p style="color: rgb(0, 255, 0);">RGB green</p>
  <p style="color: rgb(0, 0, 255);">RGB blue</p>
  
  <!-- HEX -->
  <p style="color: #FF0000;">HEX red</p>
  <p style="color: #00FF00;">HEX green</p>
  <p style="color: #0000FF;">HEX blue</p>
  
  <!-- HSL -->
  <p style="color: hsl(0, 100%, 50%);">HSL red</p>
  <p style="color: hsl(120, 100%, 50%);">HSL green</p>
  <p style="color: hsl(240, 100%, 50%);">HSL blue</p>
  
  <!-- RGBA with transparency -->
  <p style="color: rgba(255, 0, 0, 0.5);">Semi-transparent red</p>
  <div style="background-color: rgba(0, 0, 255, 0.3);">Transparent blue background</div>
</body>
</html>`,
            },
          ],
          practiceQuestions: [
            {
              question: "What is the HEX code for red?",
              type: "fill",
              starterCode: `<p style="color: #___;">Red</p>`,
              answer: "FF0000",
            },
            {
              question: "What RGB value creates blue?",
              type: "fill",
              starterCode: `<p style="color: rgb(0, 0, ___);">Blue</p>`,
              answer: "255",
            },
            {
              question: "What color format includes transparency?",
              type: "predict",
              starterCode: `rgba(255, 0, 0, 0.5)`,
              answer: "RGBA",
            },
          ],
        },
        {
          id: "html-canvas-reference",
          title: "HTML Canvas Reference",
          explanation: "The HTML Canvas API provides methods for drawing graphics via JavaScript. The canvas element creates a drawing surface. Common methods include fillRect() for rectangles, strokeRect() for outlined rectangles, fillText() for text, arc() for circles, beginPath() to start paths, moveTo() and lineTo() for lines, and fill()/stroke() to render. Canvas is useful for games, charts, animations, and custom graphics. All drawing is done with JavaScript after getting the 2D context.",
          syntax: "var ctx = canvas.getContext('2d');\nctx.fillRect(x, y, width, height);\nctx.strokeRect(x, y, width, height);\nctx.fillText(text, x, y);\nctx.arc(x, y, radius, startAngle, endAngle);",
          examples: [
            {
              title: "HTML Canvas Reference",
              description: "Common canvas drawing methods",
              code: `<!DOCTYPE html>
<html>
<body>
  <canvas id="myCanvas" width="500" height="300" style="border:1px solid #000;"></canvas>
  
  <script>
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    
    // Fill rectangle
    ctx.fillStyle = "blue";
    ctx.fillRect(50, 50, 100, 100);
    
    // Stroke rectangle
    ctx.strokeStyle = "red";
    ctx.strokeRect(200, 50, 100, 100);
    
    // Draw text
    ctx.fillStyle = "black";
    ctx.font = "30px Arial";
    ctx.fillText("Hello Canvas", 50, 200);
    
    // Draw circle
    ctx.beginPath();
    ctx.arc(400, 150, 50, 0, 2 * Math.PI);
    ctx.fillStyle = "green";
    ctx.fill();
    
    // Draw line
    ctx.beginPath();
    ctx.moveTo(0, 250);
    ctx.lineTo(500, 250);
    ctx.strokeStyle = "purple";
    ctx.stroke();
  </script>
</body>
</html>`,
            },
          ],
          practiceQuestions: [
            {
              question: "What method draws a filled rectangle?",
              type: "fill",
              starterCode: `ctx.___(50, 50, 100, 100);`,
              answer: "fillRect",
            },
            {
              question: "What method draws text?",
              type: "fill",
              starterCode: `ctx.___("Hello", 50, 50);`,
              answer: "fillText",
            },
            {
              question: "What method draws a circle?",
              type: "fill",
              starterCode: `ctx.___(x, y, radius, 0, 2*Math.PI);`,
              answer: "arc",
            },
          ],
        },
        {
          id: "html-audio-video",
          title: "HTML Audio/Video",
          explanation: "HTML5 provides <audio> and <video> elements for embedding media. Common attributes include src (source file), controls (show controls), autoplay (start automatically), loop (repeat), muted (start muted), preload (loading behavior), width/height (dimensions for video), and poster (thumbnail for video). The <source> element specifies multiple formats for browser compatibility. Media elements support various formats: MP4, WebM, OGG for video and MP3, WAV, OGG for audio.",
          syntax: "<video src='video.mp4' controls></video>\n<audio src='audio.mp3' controls></audio>\n\nWith sources: <video controls><source src='video.mp4'><source src='video.webm'></video>",
          examples: [
            {
              title: "HTML Audio/Video Reference",
              description: "Audio and video element attributes",
              code: `<!DOCTYPE html>
<html>
<body>
  <h1>Audio/Video Reference</h1>
  
  <!-- Video with attributes -->
  <video src="movie.mp4" 
         controls 
         width="640" 
         height="360" 
         poster="thumbnail.jpg"
         preload="auto">
    Your browser does not support video.
  </video>
  
  <!-- Video with multiple sources -->
  <video controls>
    <source src="movie.mp4" type="video/mp4">
    <source src="movie.webm" type="video/webm">
    Your browser does not support video.
  </video>
  
  <!-- Audio with attributes -->
  <audio src="sound.mp3" 
         controls 
         autoplay 
         loop 
         muted 
         preload="metadata">
    Your browser does not support audio.
  </audio>
  
  <!-- Audio with multiple sources -->
  <audio controls>
    <source src="sound.mp3" type="audio/mpeg">
    <source src="sound.ogg" type="audio/ogg">
    Your browser does not support audio.
  </audio>
</body>
</html>`,
            },
          ],
          practiceQuestions: [
            {
              question: "What attribute shows media controls?",
              type: "fill",
              starterCode: `<video src="video.mp4" ___></video>`,
              answer: "controls",
            },
            {
              question: "What element specifies multiple media sources?",
              type: "fill",
              starterCode: `<video>
    <___ src="video.mp4">
  </video>`,
              answer: "source",
            },
            {
              question: "What attribute sets a video thumbnail?",
              type: "fill",
              starterCode: `<video poster="___"></video>`,
              answer: "thumbnail.jpg",
            },
          ],
        },
        {
          id: "html-doctypes",
          title: "HTML Doctypes",
          explanation: "The DOCTYPE declaration tells the browser which HTML version the document uses. HTML5 uses the simple <!DOCTYPE html> declaration. Older HTML versions had longer DOCTYPE declarations. The DOCTYPE must be the first line in an HTML document. It ensures browsers render pages correctly and use the right parsing mode. Modern web development uses HTML5 DOCTYPE for all new projects.",
          syntax: "HTML5: <!DOCTYPE html>\n\nHTML 4.01 Strict: <!DOCTYPE HTML PUBLIC '-//W3C//DTD HTML 4.01//EN'...>\nXHTML 1.0: <!DOCTYPE html PUBLIC '-//W3C//DTD XHTML 1.0 Strict//EN'...>",
          examples: [
            {
              title: "HTML Doctypes",
              description: "Different DOCTYPE declarations",
              code: `<!-- HTML5 DOCTYPE (modern, recommended) -->
<!DOCTYPE html>
<html>
<head>
  <title>HTML5 Document</title>
</head>
<body>
  <h1>HTML5 Page</h1>
</body>
</html>

<!-- HTML 4.01 Strict (old) -->
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
  <title>HTML 4 Document</title>
</head>
<body>
  <h1>HTML 4 Page</h1>
</body>
</html>

<!-- XHTML 1.0 (old) -->
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
  <title>XHTML Document</title>
</head>
<body>
  <h1>XHTML Page</h1>
</body>
</html>`,
            },
          ],
          practiceQuestions: [
            {
              question: "What is the HTML5 DOCTYPE?",
              type: "fill",
              starterCode: `<!DOCTYPE ___>`,
              answer: "html",
            },
            {
              question: "Where must DOCTYPE be placed?",
              type: "predict",
              starterCode: `First line of HTML document`,
              answer: "First line of the HTML document",
            },
            {
              question: "What does DOCTYPE tell the browser?",
              type: "predict",
              starterCode: `Which HTML version`,
              answer: "Which HTML version the document uses",
            },
          ],
        },
        {
          id: "html-character-sets",
          title: "HTML Character Sets",
          explanation: "Character sets (charsets) define which characters can be used in HTML documents. UTF-8 is the recommended and most widely used character encoding. It supports all characters from all languages and is declared with <meta charset='UTF-8'> in the <head> section. Other character sets include ISO-8859-1 (Latin-1) and Windows-1252, but UTF-8 is preferred. Proper charset declaration ensures special characters, symbols, and international characters display correctly.",
          syntax: "<meta charset='UTF-8'>\n\nOther: ISO-8859-1, Windows-1252",
          examples: [
            {
              title: "HTML Character Sets",
              description: "Setting character encoding",
              code: `<!DOCTYPE html>
<html>
<head>
  <!-- UTF-8 (recommended) -->
  <meta charset="UTF-8">
  <title>UTF-8 Document</title>
</head>
<body>
  <h1>Character Sets</h1>
  <p>English: Hello World</p>
  <p>Spanish: Hola Mundo</p>
  <p>French: Bonjour le monde</p>
  <p>Chinese: 你好世界</p>
  <p>Japanese: こんにちは世界</p>
  <p>Special: © ® ™ € £ ¥</p>
  <p>Math: ∑ ∫ ∞ π</p>
</body>
</html>

<!-- Old HTML 4 way (not recommended) -->
<!DOCTYPE html>
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <title>Old Method</title>
</head>
<body>
  <p>Content</p>
</body>
</html>`,
            },
          ],
          practiceQuestions: [
            {
              question: "What is the recommended character set?",
              type: "fill",
              starterCode: `<meta charset="___">`,
              answer: "UTF-8",
            },
            {
              question: "Where does the charset meta tag go?",
              type: "fill",
              starterCode: `<___>
    <meta charset="UTF-8">
  </___>`,
              answer: "head",
            },
            {
              question: "Why is UTF-8 preferred?",
              type: "predict",
              starterCode: `Supports all characters`,
              answer: "It supports all characters from all languages",
            },
          ],
        },
        {
          id: "html-url-encode-reference",
          title: "HTML URL Encode Reference",
          explanation: "URL encoding converts characters into a format safe for URLs. URLs can only contain certain characters (letters, digits, and some special characters). Other characters must be encoded using percent encoding (% followed by two hexadecimal digits). Common encodings: space = %20, < = %3C, > = %3E, & = %26, # = %23, @ = %40, / = %2F, ? = %3F. URL encoding ensures URLs work correctly across systems and prevents errors from special characters.",
          syntax: "Space: %20\n<: %3C\n>: %3E\n&: %26\n#: %23\n@: %40\n/: %2F\n?: %3F\n\": %22",
          examples: [
            {
              title: "HTML URL Encode Reference",
              description: "Common URL encoding values",
              code: `<!DOCTYPE html>
<html>
<body>
  <h1>URL Encoding Reference</h1>
  
  <table border="1">
    <tr>
      <th>Character</th>
      <th>Encoded</th>
    </tr>
    <tr>
      <td>Space</td>
      <td>%20</td>
    </tr>
    <tr>
      <td>&lt;</td>
      <td>%3C</td>
    </tr>
    <tr>
      <td>&gt;</td>
      <td>%3E</td>
    </tr>
    <tr>
      <td>&amp;</td>
      <td>%26</td>
    </tr>
    <tr>
      <td>#</td>
      <td>%23</td>
    </tr>
    <tr>
      <td>@</td>
      <td>%40</td>
    </tr>
    <tr>
      <td>/</td>
      <td>%2F</td>
    </tr>
    <tr>
      <td>?</td>
      <td>%3F</td>
    </tr>
  </table>
  
  <h2>Examples</h2>
  <p>Space: <a href="page.html?name=John%20Doe">John Doe</a></p>
  <p>Special: <a href="search.html?q=hello%26world">Hello & World</a></p>
  <p>JavaScript encodeURIComponent(): <script>document.write(encodeURIComponent("Hello World"));</script></p>
</body>
</html>`,
            },
          ],
          practiceQuestions: [
            {
              question: "How is a space encoded in a URL?",
              type: "fill",
              starterCode: `https://example.com/page?name=John%___Doe`,
              answer: "20",
            },
            {
              question: "What encoding format is used?",
              type: "predict",
              starterCode: `%20, %3C, %26`,
              answer: "Percent encoding (% followed by hex digits)",
            },
            {
              question: "What character is encoded as %26?",
              type: "fill",
              starterCode: `%26 = ___`,
              answer: "&",
            },
          ],
        },
        {
          id: "html-lang-codes",
          title: "HTML Lang Codes",
          explanation: "Language codes specify the language of HTML content. The lang attribute uses ISO 639-1 language codes (two-letter codes) or extended codes with region (e.g., en-US). Common codes include en (English), es (Spanish), fr (French), de (German), zh (Chinese), ja (Japanese), ar (Arabic), and many more. The lang attribute helps screen readers, search engines, and browsers understand content language. It's declared in the <html> tag and can be used on any element.",
          syntax: "<html lang='en'>\n<html lang='en-US'>\n<html lang='es'>\n<html lang='fr'>",
          examples: [
            {
              title: "HTML Lang Codes",
              description: "Using language codes",
              code: `<!DOCTYPE html>
<!-- English -->
<html lang="en">
<head>
  <title>English Page</title>
</head>
<body>
  <h1>Hello World</h1>
</body>
</html>

<!-- Spanish -->
<html lang="es">
<head>
  <title>Página en Español</title>
</head>
<body>
  <h1>Hola Mundo</h1>
</body>
</html>

<!-- French -->
<html lang="fr">
<head>
  <title>Page en Français</title>
</head>
<body>
  <h1>Bonjour le monde</h1>
</body>
</html>

<!-- Multiple languages -->
<html lang="en">
<body>
  <p lang="en">This is English</p>
  <p lang="es">Esto es español</p>
  <p lang="fr">Ceci est français</p>
</body>
</html>`,
            },
          ],
          practiceQuestions: [
            {
              question: "What language code is used for English?",
              type: "fill",
              starterCode: `<html lang="___">`,
              answer: "en",
            },
            {
              question: "What language code is used for Spanish?",
              type: "fill",
              starterCode: `<html lang="___">`,
              answer: "es",
            },
            {
              question: "Why is the lang attribute important?",
              type: "predict",
              starterCode: `Helps screen readers and search engines`,
              answer: "Helps screen readers, search engines, and browsers understand content language",
            },
          ],
        },
        {
          id: "http-messages",
          title: "HTTP Messages",
          explanation: "HTTP (HyperText Transfer Protocol) messages are how browsers and servers communicate. HTTP requests are sent by browsers to request resources. HTTP responses are sent by servers to provide resources. Requests include method (GET, POST, etc.), URL, headers, and optional body. Responses include status code (200 OK, 404 Not Found, etc.), headers, and body. Understanding HTTP messages helps with web development, debugging, and API integration.",
          syntax: "HTTP Request:\nGET /page.html HTTP/1.1\nHost: example.com\n\nHTTP Response:\nHTTP/1.1 200 OK\nContent-Type: text/html",
          examples: [
            {
              title: "HTTP Messages",
              description: "HTTP request and response examples",
              code: `<!DOCTYPE html>
<html>
<head>
  <title>HTTP Messages</title>
</head>
<body>
  <h1>HTTP Messages</h1>
  
  <h2>HTTP Request Example</h2>
  <pre>
GET /index.html HTTP/1.1
Host: www.example.com
User-Agent: Mozilla/5.0
Accept: text/html
  </pre>
  
  <h2>HTTP Response Example</h2>
  <pre>
HTTP/1.1 200 OK
Content-Type: text/html
Content-Length: 1234

&lt;html&gt;
  &lt;body&gt;Content&lt;/body&gt;
&lt;/html&gt;
  </pre>
  
  <h2>Common Status Codes</h2>
  <ul>
    <li>200 - OK</li>
    <li>301 - Moved Permanently</li>
    <li>404 - Not Found</li>
    <li>500 - Internal Server Error</li>
  </ul>
  
  <h2>Common Methods</h2>
  <ul>
    <li>GET - Retrieve resource</li>
    <li>POST - Submit data</li>
    <li>PUT - Update resource</li>
    <li>DELETE - Delete resource</li>
  </ul>
</body>
</html>`,
            },
          ],
          practiceQuestions: [
            {
              question: "What does HTTP stand for?",
              type: "fill",
              starterCode: `HyperText ___ Protocol`,
              answer: "Transfer",
            },
            {
              question: "What status code means success?",
              type: "fill",
              starterCode: `HTTP/1.1 ___ OK`,
              answer: "200",
            },
            {
              question: "What method retrieves a resource?",
              type: "fill",
              starterCode: `___ /page.html HTTP/1.1`,
              answer: "GET",
            },
          ],
        },
        {
          id: "http-methods",
          title: "HTTP Methods",
          explanation: "HTTP methods (also called verbs) define the action to be performed on a resource. GET retrieves data from a server. POST submits data to a server (forms, file uploads). PUT updates a resource. DELETE removes a resource. PATCH partially updates a resource. HEAD retrieves headers only. OPTIONS returns allowed methods. GET and POST are most common in HTML forms. Understanding HTTP methods is essential for web development and API integration.",
          syntax: "GET - Retrieve\nPOST - Submit\nPUT - Update\nDELETE - Remove\nPATCH - Partial update\nHEAD - Headers only\nOPTIONS - Allowed methods",
          examples: [
            {
              title: "HTTP Methods",
              description: "Common HTTP methods",
              code: `<!DOCTYPE html>
<html>
<head>
  <title>HTTP Methods</title>
</head>
<body>
  <h1>HTTP Methods</h1>
  
  <h2>GET Method</h2>
  <p>Retrieves data from server</p>
  <form method="get" action="/search">
    <input type="text" name="q">
    <button type="submit">Search</button>
  </form>
  
  <h2>POST Method</h2>
  <p>Submits data to server</p>
  <form method="post" action="/submit">
    <input type="text" name="data">
    <button type="submit">Submit</button>
  </form>
  
  <h2>Method Comparison</h2>
  <table border="1">
    <tr>
      <th>Method</th>
      <th>Purpose</th>
    </tr>
    <tr>
      <td>GET</td>
      <td>Retrieve data</td>
    </tr>
    <tr>
      <td>POST</td>
      <td>Submit data</td>
    </tr>
    <tr>
      <td>PUT</td>
      <td>Update resource</td>
    </tr>
    <tr>
      <td>DELETE</td>
      <td>Remove resource</td>
    </tr>
  </table>
  
  <h2>JavaScript Fetch Example</h2>
  <script>
    // GET request
    fetch('/api/data', { method: 'GET' });
    
    // POST request
    fetch('/api/data', {
      method: 'POST',
      body: JSON.stringify({ data: 'value' })
    });
  </script>
</body>
</html>`,
            },
          ],
          practiceQuestions: [
            {
              question: "What method retrieves data?",
              type: "fill",
              starterCode: `<form method="___">`,
              answer: "get",
            },
            {
              question: "What method submits form data?",
              type: "fill",
              starterCode: `<form method="___">`,
              answer: "post",
            },
            {
              question: "What method removes a resource?",
              type: "predict",
              starterCode: `DELETE method`,
              answer: "DELETE",
            },
          ],
        },
        {
          id: "px-to-em-converter",
          title: "PX to EM Converter",
          explanation: "PX (pixels) and EM are CSS units for sizing. PX is an absolute unit (fixed size). EM is a relative unit based on the font size of the parent element. 1em = parent's font size. If parent is 16px, then 1em = 16px. Converting between PX and EM helps with responsive design. Common conversions: 16px = 1em (default), 12px = 0.75em, 14px = 0.875em, 18px = 1.125em, 24px = 1.5em. EM units scale better for responsive design.",
          syntax: "Default: 16px = 1em\n12px = 0.75em\n14px = 0.875em\n18px = 1.125em\n24px = 1.5em\n32px = 2em",
          examples: [
            {
              title: "PX to EM Converter",
              description: "Converting between PX and EM units",
              code: `<!DOCTYPE html>
<html>
<head>
  <title>PX to EM Converter</title>
  <style>
    body { font-size: 16px; }
    
    /* PX values */
    .px-12 { font-size: 12px; }
    .px-14 { font-size: 14px; }
    .px-16 { font-size: 16px; }
    .px-18 { font-size: 18px; }
    .px-24 { font-size: 24px; }
    
    /* EM equivalents (assuming 16px base) */
    .em-075 { font-size: 0.75em; }  /* 12px */
    .em-0875 { font-size: 0.875em; } /* 14px */
    .em-1 { font-size: 1em; }        /* 16px */
    .em-1125 { font-size: 1.125em; } /* 18px */
    .em-15 { font-size: 1.5em; }     /* 24px */
  </style>
</head>
<body>
  <h1>PX to EM Converter</h1>
  
  <h2>Conversion Table (Base: 16px)</h2>
  <table border="1">
    <tr>
      <th>Pixels (PX)</th>
      <th>EM</th>
    </tr>
    <tr>
      <td>12px</td>
      <td>0.75em</td>
    </tr>
    <tr>
      <td>14px</td>
      <td>0.875em</td>
    </tr>
    <tr>
      <td>16px</td>
      <td>1em</td>
    </tr>
    <tr>
      <td>18px</td>
      <td>1.125em</td>
    </tr>
    <tr>
      <td>24px</td>
      <td>1.5em</td>
    </tr>
    <tr>
      <td>32px</td>
      <td>2em</td>
    </tr>
  </table>
  
  <h2>Examples</h2>
  <p class="px-12">12px text</p>
  <p class="em-075">0.75em text (same as 12px)</p>
  
  <p class="px-24">24px text</p>
  <p class="em-15">1.5em text (same as 24px)</p>
</body>
</html>`,
            },
          ],
          practiceQuestions: [
            {
              question: "What is the default conversion? (assuming 16px base)",
              type: "fill",
              starterCode: `16px = ___em`,
              answer: "1",
            },
            {
              question: "What is 24px in em? (16px base)",
              type: "fill",
              starterCode: `24px = ___em`,
              answer: "1.5",
            },
            {
              question: "Which unit is better for responsive design?",
              type: "predict",
              starterCode: `EM is relative`,
              answer: "EM (relative unit)",
            },
          ],
        },
        {
          id: "keyboard-shortcuts",
          title: "Keyboard Shortcuts",
          explanation: "Keyboard shortcuts improve productivity when coding HTML. Common editor shortcuts include Ctrl+S (save), Ctrl+Z (undo), Ctrl+Y (redo), Ctrl+C (copy), Ctrl+V (paste), Ctrl+X (cut), Ctrl+F (find), Ctrl+H (replace), Ctrl+/ (comment), and many more. Browser shortcuts include F12 (developer tools), Ctrl+U (view source), Ctrl+R (reload), Ctrl+Shift+R (hard reload). Learning shortcuts speeds up HTML development and makes coding more efficient.",
          syntax: "Editor shortcuts: Ctrl+S, Ctrl+Z, Ctrl+C, Ctrl+V\nBrowser shortcuts: F12, Ctrl+U, Ctrl+R",
          examples: [
            {
              title: "Keyboard Shortcuts",
              description: "Common shortcuts for HTML development",
              code: `<!DOCTYPE html>
<html>
<head>
  <title>Keyboard Shortcuts</title>
</head>
<body>
  <h1>Keyboard Shortcuts for HTML Development</h1>
  
  <h2>Editor Shortcuts</h2>
  <table border="1">
    <tr>
      <th>Shortcut</th>
      <th>Action</th>
    </tr>
    <tr>
      <td>Ctrl+S</td>
      <td>Save file</td>
    </tr>
    <tr>
      <td>Ctrl+Z</td>
      <td>Undo</td>
    </tr>
    <tr>
      <td>Ctrl+Y</td>
      <td>Redo</td>
    </tr>
    <tr>
      <td>Ctrl+C</td>
      <td>Copy</td>
    </tr>
    <tr>
      <td>Ctrl+V</td>
      <td>Paste</td>
    </tr>
    <tr>
      <td>Ctrl+X</td>
      <td>Cut</td>
    </tr>
    <tr>
      <td>Ctrl+F</td>
      <td>Find</td>
    </tr>
    <tr>
      <td>Ctrl+H</td>
      <td>Replace</td>
    </tr>
    <tr>
      <td>Ctrl+/</td>
      <td>Comment/Uncomment</td>
    </tr>
  </table>
  
  <h2>Browser Shortcuts</h2>
  <table border="1">
    <tr>
      <th>Shortcut</th>
      <th>Action</th>
    </tr>
    <tr>
      <td>F12</td>
      <td>Developer Tools</td>
    </tr>
    <tr>
      <td>Ctrl+U</td>
      <td>View Page Source</td>
    </tr>
    <tr>
      <td>Ctrl+R</td>
      <td>Reload Page</td>
    </tr>
    <tr>
      <td>Ctrl+Shift+R</td>
      <td>Hard Reload (Clear Cache)</td>
    </tr>
    <tr>
      <td>Ctrl+Shift+I</td>
      <td>Inspect Element</td>
    </tr>
  </table>
  
  <h2>VS Code HTML Shortcuts</h2>
  <ul>
    <li>! + Tab - HTML5 boilerplate</li>
    <li>Ctrl+Shift+P - Command Palette</li>
    <li>Alt+Shift+F - Format Document</li>
    <li>Ctrl+K Ctrl+C - Comment Line</li>
  </ul>
</body>
</html>`,
            },
          ],
          practiceQuestions: [
            {
              question: "What shortcut saves a file?",
              type: "fill",
              starterCode: `___+S`,
              answer: "Ctrl",
            },
            {
              question: "What shortcut opens developer tools?",
              type: "fill",
              starterCode: `___`,
              answer: "F12",
            },
            {
              question: "What shortcut views page source?",
              type: "fill",
              starterCode: `Ctrl+___`,
              answer: "U",
            },
          ],
        },
      ],
    },
  ],
}

