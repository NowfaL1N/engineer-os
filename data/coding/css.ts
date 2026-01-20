/**
 * CSS Language Data
 * 
 * Comprehensive CSS tutorial data.
 * Organized by categories with topics, explanations, and practice questions.
 */

export const cssCoding = {
  language: "CSS",
  categories: [
    {
      id: "basics",
      title: "CSS Basics",
      topics: [
        {
          id: "css-intro",
          title: "CSS Introduction",
          explanation: "CSS (Cascading Style Sheets) is a stylesheet language used to describe the presentation of HTML documents. CSS controls how HTML elements are displayed on screen, paper, or in other media. It saves a lot of work by allowing you to control the layout of multiple web pages all at once. CSS can be added to HTML in three ways: inline styles, internal stylesheets, and external stylesheets. CSS separates content from presentation, making websites easier to maintain and style.",
          syntax: "selector {\n  property: value;\n}\n\nExample: p { color: blue; }",
          examples: [
            {
              title: "Basic CSS Example",
              description: "Simple CSS styling",
              code: `/* CSS */
h1 {
  color: blue;
  font-size: 24px;
}

p {
  color: red;
  text-align: center;
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "What does CSS stand for?",
              type: "fill",
              starterCode: `CSS stands for Cascading Style ___`,
              answer: "Sheets",
            },
            {
              question: "What does CSS control?",
              type: "predict",
              starterCode: `CSS controls how HTML elements are displayed`,
              answer: "The presentation and styling of HTML elements",
            },
            {
              question: "How many ways can CSS be added to HTML?",
              type: "predict",
              starterCode: `Inline, internal, and external stylesheets`,
              answer: "Three ways: inline, internal, and external",
            },
          ],
        },
        {
          id: "css-syntax",
          title: "CSS Syntax",
          explanation: "CSS syntax consists of a selector and a declaration block. The selector points to the HTML element you want to style. The declaration block contains one or more declarations separated by semicolons. Each declaration includes a CSS property name and a value, separated by a colon. Multiple declarations are enclosed in curly braces. CSS is case-insensitive, but property and value names are typically written in lowercase. Understanding CSS syntax is fundamental to writing effective stylesheets.",
          syntax: "selector {\n  property: value;\n  property2: value2;\n}\n\nExample:\np {\n  color: blue;\n  font-size: 16px;\n}",
          examples: [
            {
              title: "CSS Syntax Example",
              description: "Basic CSS syntax structure",
              code: `/* Selector: h1 */
/* Declaration block: { color: blue; font-size: 24px; } */
h1 {
  color: blue;
  font-size: 24px;
}

/* Multiple properties */
p {
  color: red;
  text-align: center;
  margin: 10px;
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "What separates a property from its value?",
              type: "fill",
              starterCode: `color: blue;\n/* The ___ separates property and value */`,
              answer: ":",
            },
            {
              question: "What encloses CSS declarations?",
              type: "fill",
              starterCode: `p { color: blue; }\n/* ___ braces enclose declarations */`,
              answer: "curly",
            },
            {
              question: "What separates multiple declarations?",
              type: "fill",
              starterCode: `p { color: blue; font-size: 16px; }\n/* ___ separates declarations */`,
              answer: ";",
            },
          ],
        },
        {
          id: "css-selectors",
          title: "CSS Selectors",
          explanation: "CSS selectors are patterns used to select HTML elements for styling. Common selectors include element selectors (p, h1, div), class selectors (.classname), ID selectors (#idname), attribute selectors ([attribute]), and pseudo-class selectors (:hover, :active). Selectors allow you to target specific elements or groups of elements. Understanding different selector types helps you write more precise and maintainable CSS. Selectors can be combined for more specific targeting.",
          syntax: "Element: p { }\nClass: .classname { }\nID: #idname { }\nAttribute: [attribute] { }\nPseudo-class: :hover { }",
          examples: [
            {
              title: "CSS Selectors Example",
              description: "Different types of CSS selectors",
              code: `/* Element selector */
p {
  color: blue;
}

/* Class selector */
.highlight {
  background-color: yellow;
}

/* ID selector */
#header {
  font-size: 24px;
}

/* Attribute selector */
input[type="text"] {
  border: 1px solid black;
}

/* Pseudo-class selector */
a:hover {
  color: red;
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "What symbol is used for class selectors?",
              type: "fill",
              starterCode: `.___ { color: blue; }`,
              answer: "highlight",
            },
            {
              question: "What symbol is used for ID selectors?",
              type: "fill",
              starterCode: `#___ { font-size: 24px; }`,
              answer: "header",
            },
            {
              question: "What selector targets all paragraph elements?",
              type: "fill",
              starterCode: `___ { color: blue; }`,
              answer: "p",
            },
          ],
        },
        {
          id: "css-how-to",
          title: "CSS How To",
          explanation: "CSS can be added to HTML documents in three ways: inline styles using the style attribute, internal stylesheets using the <style> tag in the <head> section, and external stylesheets using the <link> tag. External stylesheets are preferred as they separate content from presentation and allow reuse across multiple pages. Inline styles have the highest specificity and override other styles. Internal styles apply to the current page only. External stylesheets are linked using the <link rel='stylesheet' href='style.css'> tag.",
          syntax: "Inline: <p style='color: blue;'>Text</p>\n\nInternal: <style>p { color: blue; }</style>\n\nExternal: <link rel='stylesheet' href='style.css'>",
          examples: [
            {
              title: "CSS How To Example",
              description: "Three ways to add CSS",
              code: `<!-- Inline CSS -->
<p style="color: blue; font-size: 16px;">Inline styled text</p>

<!-- Internal CSS -->
<head>
  <style>
    p {
      color: blue;
      font-size: 16px;
    }
  </style>
</head>

<!-- External CSS -->
<head>
  <link rel="stylesheet" href="styles.css">
</head>

<!-- styles.css file -->
p {
  color: blue;
  font-size: 16px;
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "What attribute is used for inline CSS?",
              type: "fill",
              starterCode: `<p ___="color: blue;">Text</p>`,
              answer: "style",
            },
            {
              question: "What tag links an external CSS file?",
              type: "fill",
              starterCode: `<link rel="stylesheet" href="style.css">`,
              answer: "link",
            },
            {
              question: "Where does internal CSS go?",
              type: "fill",
              starterCode: `<___>
  <style>p { color: blue; }</style>
</___>`,
              answer: "head",
            },
          ],
        },
        {
          id: "css-comments",
          title: "CSS Comments",
          explanation: "CSS comments are used to explain code and make it more readable. Comments are ignored by browsers and don't affect the rendering of styles. CSS comments start with /* and end with */. Comments can span multiple lines. They're useful for documenting CSS code, temporarily disabling styles, and leaving notes for other developers. Unlike HTML comments, CSS comments cannot be nested. Comments help maintain and debug stylesheets.",
          syntax: "/* This is a comment */\n\n/*\n  This is a\n  multi-line comment\n*/",
          examples: [
            {
              title: "CSS Comments Example",
              description: "Using comments in CSS",
              code: `/* This is a single-line comment */

/* This is a
   multi-line comment
   that spans several lines */

p {
  color: blue; /* Inline comment */
  font-size: 16px;
}

/* Temporarily disable styles */
/*
h1 {
  color: red;
}
*/

/* Section: Header Styles */
header {
  background-color: #333;
  color: white;
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "What syntax starts a CSS comment?",
              type: "fill",
              starterCode: `/* This is a comment */`,
              answer: "/*",
            },
            {
              question: "What syntax ends a CSS comment?",
              type: "fill",
              starterCode: `/* This is a comment */`,
              answer: "*/",
            },
            {
              question: "Are CSS comments displayed in the browser?",
              type: "predict",
              starterCode: `/* Comment */`,
              answer: "No, comments are ignored by browsers",
            },
          ],
        },
        {
          id: "css-errors",
          title: "CSS Errors",
          explanation: "CSS errors occur when the browser encounters invalid CSS syntax or unsupported properties. Common errors include missing semicolons, unclosed braces, typos in property names, invalid values, and missing selectors. When CSS has errors, the browser ignores the problematic rules and continues parsing the rest of the stylesheet. Browser developer tools help identify CSS errors. Validating CSS helps catch errors early. Understanding common CSS errors helps debug stylesheets more effectively.",
          syntax: "Common errors:\nMissing semicolon: p { color: blue }\nUnclosed brace: p { color: blue;\nInvalid property: p { colr: blue; }\nInvalid value: p { color: blu; }",
          examples: [
            {
              title: "CSS Errors Example",
              description: "Common CSS errors and fixes",
              code: `/* ERROR: Missing semicolon */
p {
  color: blue  /* Missing semicolon */
  font-size: 16px;
}

/* FIXED */
p {
  color: blue; /* Added semicolon */
  font-size: 16px;
}

/* ERROR: Unclosed brace */
h1 {
  color: red;
/* Missing closing brace */

/* FIXED */
h1 {
  color: red;
}

/* ERROR: Typo in property name */
p {
  colr: blue; /* Should be 'color' */
}

/* FIXED */
p {
  color: blue;
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "What is missing in this CSS: p { color: blue }",
              type: "fill",
              starterCode: `p { color: blue }`,
              answer: ";",
            },
            {
              question: "What happens when CSS has errors?",
              type: "predict",
              starterCode: `Browser encounters invalid CSS`,
              answer: "Browser ignores problematic rules and continues",
            },
            {
              question: "What tool helps identify CSS errors?",
              type: "predict",
              starterCode: `Browser developer tools`,
              answer: "Browser developer tools",
            },
          ],
        },
        {
          id: "css-colors",
          title: "CSS Colors",
          explanation: "CSS colors can be specified using color names, RGB values, HEX codes, HSL values, or RGBA values. CSS supports 140 standard color names like red, blue, green, etc. RGB uses red, green, blue values from 0-255. HEX codes use hexadecimal values (#RRGGBB). HSL uses hue (0-360), saturation (0-100%), and lightness (0-100%). RGBA adds alpha transparency (0-1). Colors are used in properties like color, background-color, border-color, and more. Understanding color formats helps create visually appealing designs.",
          syntax: "Color names: color: red;\nRGB: color: rgb(255, 0, 0);\nHEX: color: #FF0000;\nHSL: color: hsl(0, 100%, 50%);\nRGBA: color: rgba(255, 0, 0, 0.5);",
          examples: [
            {
              title: "CSS Colors Example",
              description: "Different ways to specify colors",
              code: `/* Color names */
p {
  color: red;
  background-color: blue;
}

/* RGB */
h1 {
  color: rgb(255, 0, 0); /* Red */
  background-color: rgb(0, 255, 0); /* Green */
}

/* HEX */
div {
  color: #FF0000; /* Red */
  background-color: #00FF00; /* Green */
}

/* HSL */
span {
  color: hsl(0, 100%, 50%); /* Red */
}

/* RGBA with transparency */
button {
  background-color: rgba(255, 0, 0, 0.5); /* Semi-transparent red */
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "What is the HEX code for red?",
              type: "fill",
              starterCode: `color: #___;`,
              answer: "FF0000",
            },
            {
              question: "What RGB value creates blue?",
              type: "fill",
              starterCode: `color: rgb(0, 0, ___);`,
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
          id: "css-backgrounds",
          title: "CSS Backgrounds",
          explanation: "CSS background properties control the background appearance of elements. The background-color property sets a solid color. The background-image property sets an image. The background-repeat property controls image repetition. The background-position property sets image position. The background-attachment property controls scrolling behavior. The background-size property controls image size. Backgrounds can be layered and combined. Understanding background properties helps create visually appealing designs.",
          syntax: "background-color: color;\nbackground-image: url('image.jpg');\nbackground-repeat: repeat|no-repeat|repeat-x|repeat-y;\nbackground-position: x y;\nbackground-attachment: scroll|fixed;\nbackground-size: width height;",
          examples: [
            {
              title: "CSS Backgrounds Example",
              description: "Using various background properties",
              code: `/* Background color */
body {
  background-color: lightblue;
}

/* Background image */
div {
  background-image: url('image.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

/* Shorthand */
section {
  background: #f0f0f0 url('pattern.png') no-repeat center;
}

/* Multiple backgrounds */
header {
  background: 
    url('image1.jpg') no-repeat top left,
    url('image2.jpg') no-repeat bottom right;
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "What property sets a background color?",
              type: "fill",
              starterCode: `body { ___: lightblue; }`,
              answer: "background-color",
            },
            {
              question: "What property sets a background image?",
              type: "fill",
              starterCode: `div { ___: url('image.jpg'); }`,
              answer: "background-image",
            },
            {
              question: "What value prevents background image repetition?",
              type: "fill",
              starterCode: `background-repeat: ___;`,
              answer: "no-repeat",
            },
          ],
        },
        {
          id: "css-borders",
          title: "CSS Borders",
          explanation: "CSS border properties control the border around elements. The border-width property sets border thickness. The border-style property sets border style (solid, dashed, dotted, etc.). The border-color property sets border color. Borders can be set for all sides or individual sides (border-top, border-right, border-bottom, border-left). The border-radius property creates rounded corners. The border shorthand property combines width, style, and color. Borders help define element boundaries and create visual separation.",
          syntax: "border-width: size;\nborder-style: solid|dashed|dotted|double;\nborder-color: color;\nborder: width style color;\nborder-radius: radius;",
          examples: [
            {
              title: "CSS Borders Example",
              description: "Using border properties",
              code: `/* Border properties */
div {
  border-width: 2px;
  border-style: solid;
  border-color: black;
}

/* Shorthand */
p {
  border: 2px solid black;
}

/* Individual sides */
h1 {
  border-top: 3px solid blue;
  border-bottom: 3px solid blue;
}

/* Rounded corners */
button {
  border: 1px solid gray;
  border-radius: 10px;
}

/* Different styles */
.box {
  border: 2px dashed red;
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "What property sets border thickness?",
              type: "fill",
              starterCode: `div { ___: 2px; }`,
              answer: "border-width",
            },
            {
              question: "What border style creates a solid line?",
              type: "fill",
              starterCode: `border-style: ___;`,
              answer: "solid",
            },
            {
              question: "What property creates rounded corners?",
              type: "fill",
              starterCode: `border-___: 10px;`,
              answer: "radius",
            },
          ],
        },
        {
          id: "css-margins",
          title: "CSS Margins",
          explanation: "CSS margin properties control the space outside an element's border. Margins create space between elements. The margin property can set all sides, or use margin-top, margin-right, margin-bottom, and margin-left for individual sides. Margin values can be specified in pixels, percentages, em, rem, or auto. Negative margins can overlap elements. The margin shorthand accepts 1-4 values (top, right, bottom, left). Margins collapse vertically between adjacent elements. Understanding margins is essential for layout and spacing.",
          syntax: "margin: value;\nmargin-top: value;\nmargin-right: value;\nmargin-bottom: value;\nmargin-left: value;\nmargin: top right bottom left;",
          examples: [
            {
              title: "CSS Margins Example",
              description: "Using margin properties",
              code: `/* All sides */
div {
  margin: 20px;
}

/* Individual sides */
p {
  margin-top: 10px;
  margin-right: 15px;
  margin-bottom: 10px;
  margin-left: 15px;
}

/* Shorthand (top right bottom left) */
h1 {
  margin: 10px 15px 10px 15px;
}

/* Shorthand (top/bottom left/right) */
section {
  margin: 20px 30px;
}

/* Auto centering */
.container {
  margin: 0 auto;
  width: 800px;
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "What property creates space outside an element?",
              type: "fill",
              starterCode: `div { ___: 20px; }`,
              answer: "margin",
            },
            {
              question: "What value centers an element horizontally?",
              type: "fill",
              starterCode: `margin: 0 ___;`,
              answer: "auto",
            },
            {
              question: "How many values does margin shorthand accept?",
              type: "predict",
              starterCode: `margin: 10px 15px 10px 15px;`,
              answer: "1 to 4 values",
            },
          ],
        },
        {
          id: "css-padding",
          title: "CSS Padding",
          explanation: "CSS padding properties control the space inside an element, between the content and the border. Padding creates internal spacing within elements. The padding property can set all sides, or use padding-top, padding-right, padding-bottom, and padding-left for individual sides. Padding values can be specified in pixels, percentages, em, or rem. Unlike margins, padding cannot be negative. The padding shorthand accepts 1-4 values (top, right, bottom, left). Padding affects the element's total size when using box-sizing: content-box.",
          syntax: "padding: value;\npadding-top: value;\npadding-right: value;\npadding-bottom: value;\npadding-left: value;\npadding: top right bottom left;",
          examples: [
            {
              title: "CSS Padding Example",
              description: "Using padding properties",
              code: `/* All sides */
div {
  padding: 20px;
}

/* Individual sides */
p {
  padding-top: 10px;
  padding-right: 15px;
  padding-bottom: 10px;
  padding-left: 15px;
}

/* Shorthand (top right bottom left) */
h1 {
  padding: 10px 15px 10px 15px;
}

/* Shorthand (top/bottom left/right) */
section {
  padding: 20px 30px;
}

/* Different values per side */
button {
  padding: 10px 20px 15px 25px;
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "What property creates space inside an element?",
              type: "fill",
              starterCode: `div { ___: 20px; }`,
              answer: "padding",
            },
            {
              question: "Where is padding located?",
              type: "predict",
              starterCode: `Between content and border`,
              answer: "Inside the element, between content and border",
            },
            {
              question: "Can padding be negative?",
              type: "predict",
              starterCode: `padding: -10px;`,
              answer: "No, padding cannot be negative",
            },
          ],
        },
        {
          id: "css-height-width",
          title: "CSS Height / Width",
          explanation: "CSS height and width properties control the dimensions of elements. The height property sets element height. The width property sets element width. Values can be specified in pixels, percentages, em, rem, or auto. The max-width property sets maximum width. The min-width property sets minimum width. The max-height property sets maximum height. The min-height property sets minimum height. Percentage values are relative to the parent element. Understanding dimensions is essential for responsive design and layout control.",
          syntax: "width: value;\nheight: value;\nmax-width: value;\nmin-width: value;\nmax-height: value;\nmin-height: value;",
          examples: [
            {
              title: "CSS Height / Width Example",
              description: "Setting element dimensions",
              code: `/* Fixed dimensions */
div {
  width: 300px;
  height: 200px;
}

/* Percentage dimensions */
section {
  width: 50%;
  height: 100%;
}

/* Max and min dimensions */
.container {
  max-width: 1200px;
  min-width: 300px;
  width: 100%;
}

/* Responsive image */
img {
  max-width: 100%;
  height: auto;
}

/* Full viewport */
.fullscreen {
  width: 100vw;
  height: 100vh;
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "What property sets element width?",
              type: "fill",
              starterCode: `div { ___: 300px; }`,
              answer: "width",
            },
            {
              question: "What property sets maximum width?",
              type: "fill",
              starterCode: `div { ___: 1200px; }`,
              answer: "max-width",
            },
            {
              question: "What value makes width responsive?",
              type: "predict",
              starterCode: `width: 100%;`,
              answer: "Percentage (100%)",
            },
          ],
        },
        {
          id: "css-box-model",
          title: "CSS Box Model",
          explanation: "The CSS box model describes how elements are rendered as rectangular boxes. Each box consists of content, padding, border, and margin. Content is the actual content area. Padding is space inside the element. Border surrounds the padding. Margin is space outside the border. The total width/height includes content + padding + border. The box-sizing property controls how dimensions are calculated. box-sizing: content-box (default) includes only content. box-sizing: border-box includes padding and border in the width/height. Understanding the box model is fundamental to CSS layout.",
          syntax: "Total width = width + padding + border + margin\n\nbox-sizing: content-box; /* default */\nbox-sizing: border-box; /* includes padding and border */",
          examples: [
            {
              title: "CSS Box Model Example",
              description: "Understanding the box model",
              code: `/* Box model components */
div {
  width: 300px;        /* Content width */
  padding: 20px;       /* Space inside */
  border: 5px solid;   /* Border around padding */
  margin: 10px;        /* Space outside */
  /* Total width = 300 + 40 + 10 + 20 = 370px */
}

/* Content-box (default) */
.box1 {
  box-sizing: content-box;
  width: 300px;
  padding: 20px;
  border: 5px solid;
  /* Total width = 300 + 40 + 10 = 350px */
}

/* Border-box */
.box2 {
  box-sizing: border-box;
  width: 300px;
  padding: 20px;
  border: 5px solid;
  /* Total width = 300px (includes padding and border) */
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "What are the four parts of the box model?",
              type: "predict",
              starterCode: `Content, padding, border, margin`,
              answer: "Content, padding, border, and margin",
            },
            {
              question: "What property includes padding and border in width?",
              type: "fill",
              starterCode: `box-___: border-box;`,
              answer: "sizing",
            },
            {
              question: "What is the default box-sizing value?",
              type: "fill",
              starterCode: `box-sizing: ___;`,
              answer: "content-box",
            },
          ],
        },
        {
          id: "css-outline",
          title: "CSS Outline",
          explanation: "CSS outline properties create a line around elements outside the border. Outlines are similar to borders but don't take up space and don't affect layout. The outline-width property sets outline thickness. The outline-style property sets outline style (solid, dashed, dotted, etc.). The outline-color property sets outline color. The outline-offset property adds space between outline and border. Outlines are commonly used for focus indicators on form elements. Unlike borders, outlines don't affect element dimensions.",
          syntax: "outline-width: size;\noutline-style: solid|dashed|dotted;\noutline-color: color;\noutline: width style color;\noutline-offset: distance;",
          examples: [
            {
              title: "CSS Outline Example",
              description: "Using outline properties",
              code: `/* Outline properties */
input {
  outline-width: 2px;
  outline-style: solid;
  outline-color: blue;
}

/* Shorthand */
button:focus {
  outline: 2px solid blue;
}

/* Outline offset */
div {
  border: 2px solid black;
  outline: 3px solid red;
  outline-offset: 5px;
}

/* Remove outline */
a {
  outline: none;
}

/* Focus indicator */
input:focus {
  outline: 2px dashed orange;
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "What property creates a line outside the border?",
              type: "fill",
              starterCode: `input { ___: 2px solid blue; }`,
              answer: "outline",
            },
            {
              question: "Do outlines affect element dimensions?",
              type: "predict",
              starterCode: `outline: 2px solid blue;`,
              answer: "No, outlines don't affect dimensions",
            },
            {
              question: "What property adds space between outline and border?",
              type: "fill",
              starterCode: `outline-___: 5px;`,
              answer: "offset",
            },
          ],
        },
        {
          id: "css-text",
          title: "CSS Text",
          explanation: "CSS text properties control text appearance and formatting. The color property sets text color. The text-align property aligns text (left, right, center, justify). The text-decoration property adds decorations (underline, overline, line-through). The text-transform property changes text case (uppercase, lowercase, capitalize). The text-indent property indents the first line. The letter-spacing property controls space between characters. The word-spacing property controls space between words. The line-height property controls line spacing. Text properties help create readable and visually appealing typography.",
          syntax: "color: color;\ntext-align: left|right|center|justify;\ntext-decoration: underline|overline|line-through|none;\ntext-transform: uppercase|lowercase|capitalize;\ntext-indent: value;\nletter-spacing: value;\nword-spacing: value;\nline-height: value;",
          examples: [
            {
              title: "CSS Text Example",
              description: "Using text properties",
              code: `/* Text color */
p {
  color: blue;
}

/* Text alignment */
h1 {
  text-align: center;
}

/* Text decoration */
a {
  text-decoration: underline;
}

/* Text transform */
.title {
  text-transform: uppercase;
}

/* Text indent */
p {
  text-indent: 30px;
}

/* Letter spacing */
h1 {
  letter-spacing: 2px;
}

/* Line height */
p {
  line-height: 1.6;
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "What property sets text color?",
              type: "fill",
              starterCode: `p { ___: blue; }`,
              answer: "color",
            },
            {
              question: "What property centers text?",
              type: "fill",
              starterCode: `h1 { ___: center; }`,
              answer: "text-align",
            },
            {
              question: "What property adds underline?",
              type: "fill",
              starterCode: `a { ___: underline; }`,
              answer: "text-decoration",
            },
          ],
        },
        {
          id: "css-fonts",
          title: "CSS Fonts",
          explanation: "CSS font properties control font appearance. The font-family property specifies font families. The font-size property sets font size. The font-weight property sets font thickness (normal, bold, or numeric values). The font-style property sets font style (normal, italic, oblique). The font-variant property sets small caps. The font shorthand property combines multiple font properties. Web fonts can be loaded using @font-face. Font properties help create consistent and readable typography across websites.",
          syntax: "font-family: name, fallback;\nfont-size: size;\nfont-weight: normal|bold|100-900;\nfont-style: normal|italic|oblique;\nfont-variant: normal|small-caps;\nfont: style weight size/line-height family;",
          examples: [
            {
              title: "CSS Fonts Example",
              description: "Using font properties",
              code: `/* Font family */
p {
  font-family: Arial, sans-serif;
}

/* Font size */
h1 {
  font-size: 24px;
}

/* Font weight */
.bold {
  font-weight: bold;
}

/* Font style */
.italic {
  font-style: italic;
}

/* Font shorthand */
.title {
  font: italic bold 20px/1.5 Arial, sans-serif;
}

/* Web font */
@font-face {
  font-family: 'CustomFont';
  src: url('font.woff2') format('woff2');
}

.custom {
  font-family: 'CustomFont', sans-serif;
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "What property sets font family?",
              type: "fill",
              starterCode: `p { ___: Arial, sans-serif; }`,
              answer: "font-family",
            },
            {
              question: "What property sets font size?",
              type: "fill",
              starterCode: `h1 { ___: 24px; }`,
              answer: "font-size",
            },
            {
              question: "What value makes text bold?",
              type: "fill",
              starterCode: `font-weight: ___;`,
              answer: "bold",
            },
          ],
        },
        {
          id: "css-icons",
          title: "CSS Icons",
          explanation: "CSS icons can be added using icon fonts, SVG icons, or CSS-only techniques. Popular icon font libraries include Font Awesome, Material Icons, and Bootstrap Icons. Icons are typically added using <i> or <span> elements with specific classes. Icon fonts use the font-family property. CSS can style icons with color, size, and other properties. SVG icons can be embedded directly or used as background images. CSS-only icons use shapes and pseudo-elements. Icons enhance user interfaces and improve visual communication.",
          syntax: "Icon fonts: <i class='fa fa-icon'></i>\nCSS: .icon { font-family: 'IconFont'; }\nSVG: <svg>...</svg>\nBackground: background-image: url('icon.svg');",
          examples: [
            {
              title: "CSS Icons Example",
              description: "Using icons in CSS",
              code: `/* Font Awesome icons */
<i class="fa fa-home"></i>
<i class="fa fa-user"></i>

/* CSS styling for icons */
.fa {
  font-family: 'Font Awesome';
  font-size: 24px;
  color: blue;
}

.fa-home::before {
  content: "\\f015";
}

/* SVG icon */
.icon {
  width: 24px;
  height: 24px;
  background-image: url('icon.svg');
  background-size: contain;
}

/* CSS-only icon */
.arrow::before {
  content: "";
  display: inline-block;
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-bottom: 10px solid black;
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "What HTML element is commonly used for icon fonts?",
              type: "fill",
              starterCode: `<___ class="fa fa-home"></___>`,
              answer: "i",
            },
            {
              question: "What property sets icon font family?",
              type: "fill",
              starterCode: `.icon { ___: 'IconFont'; }`,
              answer: "font-family",
            },
            {
              question: "What is a popular icon font library?",
              type: "predict",
              starterCode: `Font Awesome, Material Icons`,
              answer: "Font Awesome (or Material Icons)",
            },
          ],
        },
        {
          id: "css-links",
          title: "CSS Links",
          explanation: "CSS can style links in different states using pseudo-classes. The :link pseudo-class styles unvisited links. The :visited pseudo-class styles visited links. The :hover pseudo-class styles links on mouse hover. The :active pseudo-class styles active/clicked links. The :focus pseudo-class styles focused links. Links can be styled with color, text-decoration, background-color, and more. Understanding link states helps create interactive and accessible navigation. The order of pseudo-classes matters: :link, :visited, :hover, :active.",
          syntax: "a:link { }\na:visited { }\na:hover { }\na:active { }\na:focus { }",
          examples: [
            {
              title: "CSS Links Example",
              description: "Styling links in different states",
              code: `/* Unvisited link */
a:link {
  color: blue;
  text-decoration: none;
}

/* Visited link */
a:visited {
  color: purple;
}

/* Hover state */
a:hover {
  color: red;
  text-decoration: underline;
}

/* Active state */
a:active {
  color: green;
}

/* Focus state */
a:focus {
  outline: 2px solid orange;
}

/* All links */
a {
  font-weight: bold;
  transition: color 0.3s;
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "What pseudo-class styles unvisited links?",
              type: "fill",
              starterCode: `a:___ { color: blue; }`,
              answer: "link",
            },
            {
              question: "What pseudo-class styles links on hover?",
              type: "fill",
              starterCode: `a:___ { color: red; }`,
              answer: "hover",
            },
            {
              question: "What is the correct order of link pseudo-classes?",
              type: "predict",
              starterCode: `:link, :visited, :hover, :active`,
              answer: ":link, :visited, :hover, :active",
            },
          ],
        },
        {
          id: "css-lists",
          title: "CSS Lists",
          explanation: "CSS list properties control the appearance of HTML lists (<ul> and <ol>). The list-style-type property sets the marker type (disc, circle, square, decimal, etc.). The list-style-position property sets marker position (inside, outside). The list-style-image property uses an image as marker. The list-style shorthand combines type, position, and image. Lists can be styled with colors, spacing, and custom markers. Understanding list properties helps create visually appealing navigation menus and content lists.",
          syntax: "list-style-type: disc|circle|square|decimal|none;\nlist-style-position: inside|outside;\nlist-style-image: url('image.png');\nlist-style: type position image;",
          examples: [
            {
              title: "CSS Lists Example",
              description: "Styling lists",
              code: `/* List style type */
ul {
  list-style-type: square;
}

ol {
  list-style-type: decimal;
}

/* List style position */
ul {
  list-style-position: inside;
}

/* List style image */
ul {
  list-style-image: url('bullet.png');
}

/* Remove list markers */
ul {
  list-style: none;
}

/* Custom styling */
ul li {
  padding: 5px;
  color: blue;
}

/* Shorthand */
ul {
  list-style: square inside;
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "What property sets list marker type?",
              type: "fill",
              starterCode: `ul { ___: square; }`,
              answer: "list-style-type",
            },
            {
              question: "What value removes list markers?",
              type: "fill",
              starterCode: `ul { list-style-type: ___; }`,
              answer: "none",
            },
            {
              question: "What property uses an image as marker?",
              type: "fill",
              starterCode: `ul { ___: url('bullet.png'); }`,
              answer: "list-style-image",
            },
          ],
        },
        {
          id: "css-tables",
          title: "CSS Tables",
          explanation: "CSS table properties control the appearance of HTML tables. The border-collapse property controls border behavior (collapse, separate). The border-spacing property sets space between borders. The width property sets table width. The text-align property aligns cell content. The vertical-align property aligns cell content vertically. The padding property adds space inside cells. Tables can be styled with colors, borders, spacing, and hover effects. Understanding table properties helps create readable and visually appealing data tables.",
          syntax: "border-collapse: collapse|separate;\nborder-spacing: value;\nwidth: value;\ntext-align: left|right|center;\nvertical-align: top|middle|bottom;\npadding: value;",
          examples: [
            {
              title: "CSS Tables Example",
              description: "Styling tables",
              code: `/* Border collapse */
table {
  border-collapse: collapse;
  width: 100%;
}

/* Table borders */
table, th, td {
  border: 1px solid black;
}

/* Cell padding */
th, td {
  padding: 10px;
  text-align: left;
}

/* Header styling */
th {
  background-color: #4CAF50;
  color: white;
}

/* Row hover effect */
tr:hover {
  background-color: #f5f5f5;
}

/* Alternating row colors */
tr:nth-child(even) {
  background-color: #f2f2f2;
}

/* Cell alignment */
td {
  vertical-align: middle;
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "What property merges table borders?",
              type: "fill",
              starterCode: `table { ___: collapse; }`,
              answer: "border-collapse",
            },
            {
              question: "What property sets space between borders?",
              type: "fill",
              starterCode: `table { ___: 5px; }`,
              answer: "border-spacing",
            },
            {
              question: "What pseudo-class styles even rows?",
              type: "fill",
              starterCode: `tr:___ { background-color: #f2f2f2; }`,
              answer: "nth-child(even)",
            },
          ],
        },
        {
          id: "css-display",
          title: "CSS Display",
          explanation: "The CSS display property controls how elements are displayed. Common values include block (takes full width, starts on new line), inline (takes only necessary width, no line break), inline-block (like inline but can have width/height), none (hides element completely), flex (flexbox layout), grid (grid layout), and table (table layout). The display property is fundamental to CSS layout. Changing display values affects how elements interact with each other and how they flow in the document.",
          syntax: "display: block|inline|inline-block|none|flex|grid|table;",
          examples: [
            {
              title: "CSS Display Example",
              description: "Using display property",
              code: `/* Block element */
div {
  display: block;
  width: 100%;
}

/* Inline element */
span {
  display: inline;
  /* Cannot set width/height */
}

/* Inline-block */
.button {
  display: inline-block;
  width: 100px;
  height: 40px;
}

/* Hide element */
.hidden {
  display: none;
}

/* Flexbox */
.container {
  display: flex;
}

/* Grid */
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

/* Table */
.table {
  display: table;
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "What display value takes full width?",
              type: "fill",
              starterCode: `div { display: ___; }`,
              answer: "block",
            },
            {
              question: "What display value hides an element?",
              type: "fill",
              starterCode: `.hidden { display: ___; }`,
              answer: "none",
            },
            {
              question: "What display value enables flexbox?",
              type: "fill",
              starterCode: `.container { display: ___; }`,
              answer: "flex",
            },
          ],
        },
        {
          id: "css-max-width",
          title: "CSS Max-width",
          explanation: "The CSS max-width property sets the maximum width of an element. It prevents elements from becoming wider than the specified value. Max-width is useful for responsive design, ensuring content doesn't exceed a certain width on large screens. When the viewport is smaller than max-width, the element will shrink. Max-width is commonly used with width: 100% to create responsive containers. It's particularly useful for text content, images, and containers to maintain readability and layout.",
          syntax: "max-width: value;\n\nCommon: max-width: 1200px;\nResponsive: max-width: 100%;",
          examples: [
            {
              title: "CSS Max-width Example",
              description: "Using max-width for responsive design",
              code: `/* Maximum width */
.container {
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
}

/* Responsive text */
article {
  max-width: 800px;
  margin: 0 auto;
}

/* Responsive image */
img {
  max-width: 100%;
  height: auto;
}

/* Combined with min-width */
.box {
  min-width: 300px;
  max-width: 600px;
  width: 100%;
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "What property sets maximum element width?",
              type: "fill",
              starterCode: `.container { ___: 1200px; }`,
              answer: "max-width",
            },
            {
              question: "What does max-width prevent?",
              type: "predict",
              starterCode: `max-width: 1200px;`,
              answer: "Elements from becoming wider than specified",
            },
            {
              question: "What value makes max-width responsive?",
              type: "fill",
              starterCode: `max-width: ___;`,
              answer: "100%",
            },
          ],
        },
        {
          id: "css-position",
          title: "CSS Position",
          explanation: "The CSS position property specifies how an element is positioned. Static is the default (normal flow). Relative positions relative to its normal position. Absolute positions relative to the nearest positioned ancestor. Fixed positions relative to the viewport (stays fixed on scroll). Sticky positions based on scroll position. Positioned elements can use top, right, bottom, and left properties. Understanding position is essential for creating complex layouts, overlays, and fixed navigation bars.",
          syntax: "position: static|relative|absolute|fixed|sticky;\n\nWith offsets: top, right, bottom, left",
          examples: [
            {
              title: "CSS Position Example",
              description: "Using different position values",
              code: `/* Static (default) */
div {
  position: static;
}

/* Relative */
.box {
  position: relative;
  top: 20px;
  left: 30px;
}

/* Absolute */
.absolute {
  position: absolute;
  top: 0;
  right: 0;
}

/* Fixed */
.header {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
}

/* Sticky */
.sticky {
  position: sticky;
  top: 0;
  background-color: white;
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "What is the default position value?",
              type: "fill",
              starterCode: `position: ___;`,
              answer: "static",
            },
            {
              question: "What position stays fixed on scroll?",
              type: "fill",
              starterCode: `position: ___;`,
              answer: "fixed",
            },
            {
              question: "What position positions relative to nearest positioned ancestor?",
              type: "fill",
              starterCode: `position: ___;`,
              answer: "absolute",
            },
          ],
        },
        {
          id: "css-z-index",
          title: "CSS Z-index",
          explanation: "The CSS z-index property controls the stacking order of positioned elements. Elements with higher z-index values appear on top of elements with lower values. Z-index only works on positioned elements (relative, absolute, fixed, sticky). The default z-index is auto (0). Negative values can place elements behind others. Z-index is essential for creating overlays, modals, dropdowns, and managing element layering. Understanding z-index helps control visual hierarchy and element stacking.",
          syntax: "z-index: number|auto;\n\nPositive: z-index: 1;\nNegative: z-index: -1;\nAuto: z-index: auto;",
          examples: [
            {
              title: "CSS Z-index Example",
              description: "Using z-index for layering",
              code: `/* Base element */
.box1 {
  position: relative;
  z-index: 1;
  background-color: blue;
}

/* On top */
.box2 {
  position: relative;
  z-index: 2;
  background-color: red;
  margin-top: -20px;
}

/* Behind */
.box3 {
  position: relative;
  z-index: -1;
  background-color: green;
}

/* Modal overlay */
.overlay {
  position: fixed;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.5);
}

/* Modal content */
.modal {
  position: fixed;
  z-index: 1001;
  background-color: white;
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "What property controls element stacking order?",
              type: "fill",
              starterCode: `z-___: 1;`,
              answer: "index",
            },
            {
              question: "What z-index value appears on top?",
              type: "predict",
              starterCode: `z-index: 2 vs z-index: 1`,
              answer: "Higher value (2)",
            },
            {
              question: "Does z-index work on static elements?",
              type: "predict",
              starterCode: `position: static; z-index: 1;`,
              answer: "No, only on positioned elements",
            },
          ],
        },
        {
          id: "css-overflow",
          title: "CSS Overflow",
          explanation: "The CSS overflow property controls what happens when content overflows an element's box. Visible (default) shows overflow content. Hidden clips overflow content. Scroll adds scrollbars. Auto adds scrollbars only when needed. Overflow-x and overflow-y control horizontal and vertical overflow separately. Overflow is essential for managing content that exceeds container dimensions. It's commonly used with fixed dimensions, text content, and images.",
          syntax: "overflow: visible|hidden|scroll|auto;\noverflow-x: value;\noverflow-y: value;",
          examples: [
            {
              title: "CSS Overflow Example",
              description: "Using overflow property",
              code: `/* Visible (default) */
div {
  overflow: visible;
  width: 200px;
  height: 100px;
}

/* Hidden */
.container {
  overflow: hidden;
  width: 200px;
  height: 100px;
}

/* Scroll */
.scrollable {
  overflow: scroll;
  width: 200px;
  height: 100px;
}

/* Auto */
.auto {
  overflow: auto;
  width: 200px;
  height: 100px;
}

/* Separate axes */
.box {
  overflow-x: hidden;
  overflow-y: scroll;
}

/* Text overflow */
.text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "What property controls content overflow?",
              type: "fill",
              starterCode: `div { ___: hidden; }`,
              answer: "overflow",
            },
            {
              question: "What value clips overflow content?",
              type: "fill",
              starterCode: `overflow: ___;`,
              answer: "hidden",
            },
            {
              question: "What value adds scrollbars when needed?",
              type: "fill",
              starterCode: `overflow: ___;`,
              answer: "auto",
            },
          ],
        },
        {
          id: "css-float",
          title: "CSS Float",
          explanation: "The CSS float property positions elements to the left or right of their container, allowing other content to wrap around them. Float was traditionally used for layouts but is now mainly used for text wrapping around images. Common values are left, right, and none. Floated elements are removed from normal flow. The clear property prevents elements from floating next to floated elements. Modern layouts use Flexbox and Grid instead of float for positioning.",
          syntax: "float: left|right|none;\nclear: left|right|both|none;",
          examples: [
            {
              title: "CSS Float Example",
              description: "Using float for text wrapping",
              code: `/* Float left */
img {
  float: left;
  margin-right: 20px;
}

/* Float right */
.sidebar {
  float: right;
  width: 200px;
}

/* Clear float */
.clearfix::after {
  content: "";
  display: table;
  clear: both;
}

/* Text wrapping */
p {
  text-align: justify;
}

/* Multiple floats */
.box1 {
  float: left;
  width: 50%;
}

.box2 {
  float: right;
  width: 50%;
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "What property positions elements to left or right?",
              type: "fill",
              starterCode: `img { ___: left; }`,
              answer: "float",
            },
            {
              question: "What property prevents floating next to floated elements?",
              type: "fill",
              starterCode: `div { ___: both; }`,
              answer: "clear",
            },
            {
              question: "What is float mainly used for today?",
              type: "predict",
              starterCode: `Text wrapping around images`,
              answer: "Text wrapping around images",
            },
          ],
        },
        {
          id: "css-inline-block",
          title: "CSS Inline-block",
          explanation: "The CSS display: inline-block value combines features of inline and block elements. Inline-block elements flow like inline elements (no line break) but can have width and height like block elements. They respect margins and padding on all sides. Inline-block is useful for creating horizontal navigation menus, button groups, and inline elements that need dimensions. Unlike inline elements, inline-block elements can have vertical margins and padding.",
          syntax: "display: inline-block;\n\nWith dimensions: width, height, margin, padding",
          examples: [
            {
              title: "CSS Inline-block Example",
              description: "Using inline-block display",
              code: `/* Inline-block */
.button {
  display: inline-block;
  width: 100px;
  height: 40px;
  padding: 10px;
  margin: 5px;
  background-color: blue;
  color: white;
}

/* Navigation menu */
.nav-item {
  display: inline-block;
  padding: 10px 20px;
  margin: 0 5px;
}

/* Button group */
.button-group button {
  display: inline-block;
  vertical-align: middle;
}

/* Cards in a row */
.card {
  display: inline-block;
  width: 200px;
  vertical-align: top;
  margin: 10px;
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "What display value combines inline and block features?",
              type: "fill",
              starterCode: `display: ___-block;`,
              answer: "inline",
            },
            {
              question: "Can inline-block elements have width and height?",
              type: "predict",
              starterCode: `display: inline-block; width: 100px;`,
              answer: "Yes, unlike inline elements",
            },
            {
              question: "What is inline-block useful for?",
              type: "predict",
              starterCode: `Horizontal navigation, button groups`,
              answer: "Creating horizontal layouts and inline elements with dimensions",
            },
          ],
        },
        {
          id: "css-align",
          title: "CSS Align",
          explanation: "CSS alignment properties control how elements and content are aligned. Text-align aligns text content (left, right, center, justify). Vertical-align aligns inline and table-cell elements vertically. Margin auto centers block elements horizontally. Flexbox and Grid provide advanced alignment with justify-content, align-items, and align-content. Alignment is essential for creating balanced, visually appealing layouts. Different alignment methods work for different layout scenarios.",
          syntax: "text-align: left|right|center|justify;\nvertical-align: top|middle|bottom|baseline;\nmargin: 0 auto; /* centers block elements */\n\nFlexbox: justify-content, align-items\nGrid: justify-items, align-items",
          examples: [
            {
              title: "CSS Align Example",
              description: "Different alignment methods",
              code: `/* Text alignment */
p {
  text-align: center;
}

h1 {
  text-align: left;
}

/* Vertical alignment */
img {
  vertical-align: middle;
}

/* Center block element */
.container {
  width: 800px;
  margin: 0 auto;
}

/* Flexbox alignment */
.flex-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Grid alignment */
.grid-container {
  display: grid;
  place-items: center;
}

/* Inline-block alignment */
.inline-block {
  display: inline-block;
  vertical-align: top;
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "What property centers text?",
              type: "fill",
              starterCode: `p { ___: center; }`,
              answer: "text-align",
            },
            {
              question: "What centers a block element horizontally?",
              type: "fill",
              starterCode: `margin: 0 ___;`,
              answer: "auto",
            },
            {
              question: "What property aligns inline elements vertically?",
              type: "fill",
              starterCode: `img { ___: middle; }`,
              answer: "vertical-align",
            },
          ],
        },
        {
          id: "css-combinators",
          title: "CSS Combinators",
          explanation: "CSS combinators explain the relationship between selectors. The descendant combinator (space) selects all descendants. The child combinator (>) selects direct children. The adjacent sibling combinator (+) selects immediately following sibling. The general sibling combinator (~) selects all following siblings. Combinators allow precise element targeting based on their position in the DOM tree. Understanding combinators helps write more specific and efficient CSS selectors.",
          syntax: "Descendant: ancestor descendant { }\nChild: parent > child { }\nAdjacent: element + sibling { }\nGeneral: element ~ sibling { }",
          examples: [
            {
              title: "CSS Combinators Example",
              description: "Using different combinators",
              code: `/* Descendant combinator (space) */
div p {
  color: blue;
}

/* Child combinator (>) */
div > p {
  color: red;
}

/* Adjacent sibling combinator (+) */
h1 + p {
  font-weight: bold;
}

/* General sibling combinator (~) */
h1 ~ p {
  color: green;
}

/* Combined */
.container > .item + .item {
  margin-top: 10px;
}

/* Nested */
nav ul li a {
  text-decoration: none;
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "What combinator selects all descendants?",
              type: "fill",
              starterCode: `div ___ p { color: blue; }`,
              answer: " ",
            },
            {
              question: "What combinator selects direct children?",
              type: "fill",
              starterCode: `div ___ p { color: red; }`,
              answer: ">",
            },
            {
              question: "What combinator selects immediately following sibling?",
              type: "fill",
              starterCode: `h1 ___ p { font-weight: bold; }`,
              answer: "+",
            },
          ],
        },
        {
          id: "css-pseudo-classes",
          title: "CSS Pseudo-classes",
          explanation: "CSS pseudo-classes select elements based on their state or position. Common pseudo-classes include :hover (mouse over), :active (being clicked), :focus (focused), :visited (visited links), :first-child (first child), :last-child (last child), :nth-child() (specific child), :not() (negation), and many more. Pseudo-classes allow styling elements in specific states without JavaScript. They're essential for interactive elements, form validation, and dynamic styling based on element position.",
          syntax: "selector:pseudo-class { }\n\nExamples: :hover, :active, :focus, :first-child, :nth-child(n), :not(selector)",
          examples: [
            {
              title: "CSS Pseudo-classes Example",
              description: "Using various pseudo-classes",
              code: `/* Hover */
a:hover {
  color: red;
}

/* Active */
button:active {
  background-color: darkblue;
}

/* Focus */
input:focus {
  border: 2px solid blue;
}

/* First child */
li:first-child {
  font-weight: bold;
}

/* Last child */
li:last-child {
  border-bottom: none;
}

/* Nth child */
li:nth-child(2n) {
  background-color: #f0f0f0;
}

/* Not */
p:not(.special) {
  color: black;
}

/* Visited */
a:visited {
  color: purple;
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "What pseudo-class styles on mouse hover?",
              type: "fill",
              starterCode: `a:___ { color: red; }`,
              answer: "hover",
            },
            {
              question: "What pseudo-class selects the first child?",
              type: "fill",
              starterCode: `li:___ { font-weight: bold; }`,
              answer: "first-child",
            },
            {
              question: "What pseudo-class selects every even element?",
              type: "fill",
              starterCode: `li:___(2n) { background-color: gray; }`,
              answer: "nth-child",
            },
          ],
        },
        {
          id: "css-pseudo-elements",
          title: "CSS Pseudo-elements",
          explanation: "CSS pseudo-elements style specific parts of elements. ::before creates content before an element. ::after creates content after an element. ::first-line styles the first line. ::first-letter styles the first letter. ::selection styles selected text. Pseudo-elements use double colons (::) in CSS3. They're useful for decorative elements, icons, and text effects. Pseudo-elements require the content property (except ::first-line and ::first-letter).",
          syntax: "selector::pseudo-element { }\n\nExamples: ::before, ::after, ::first-line, ::first-letter, ::selection",
          examples: [
            {
              title: "CSS Pseudo-elements Example",
              description: "Using pseudo-elements",
              code: `/* Before */
p::before {
  content: "→ ";
  color: blue;
}

/* After */
p::after {
  content: " ←";
  color: red;
}

/* First letter */
p::first-letter {
  font-size: 200%;
  color: red;
}

/* First line */
p::first-line {
  font-weight: bold;
}

/* Selection */
::selection {
  background-color: yellow;
  color: black;
}

/* Decorative element */
.button::before {
  content: "";
  display: block;
  width: 10px;
  height: 10px;
  background-color: blue;
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "What pseudo-element creates content before?",
              type: "fill",
              starterCode: `p::___ { content: "→ "; }`,
              answer: "before",
            },
            {
              question: "What property is required for ::before and ::after?",
              type: "fill",
              starterCode: `p::before { ___: "→ "; }`,
              answer: "content",
            },
            {
              question: "What pseudo-element styles the first letter?",
              type: "fill",
              starterCode: `p::___ { font-size: 200%; }`,
              answer: "first-letter",
            },
          ],
        },
        {
          id: "css-opacity",
          title: "CSS Opacity",
          explanation: "The CSS opacity property sets the transparency of an element. Values range from 0.0 (fully transparent) to 1.0 (fully opaque). Opacity affects the entire element including its content. The opacity property is useful for creating overlays, hover effects, and visual hierarchy. Unlike rgba() which only affects color, opacity affects all aspects of an element. Opacity can be animated and transitioned smoothly.",
          syntax: "opacity: value;\n\nRange: 0.0 (transparent) to 1.0 (opaque)",
          examples: [
            {
              title: "CSS Opacity Example",
              description: "Using opacity property",
              code: `/* Fully opaque */
div {
  opacity: 1.0;
}

/* Semi-transparent */
.overlay {
  opacity: 0.5;
  background-color: black;
}

/* Hover effect */
.button {
  opacity: 1.0;
  transition: opacity 0.3s;
}

.button:hover {
  opacity: 0.7;
}

/* Transparent */
.hidden {
  opacity: 0;
}

/* Different opacity levels */
.opacity-50 {
  opacity: 0.5;
}

.opacity-75 {
  opacity: 0.75;
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "What property sets element transparency?",
              type: "fill",
              starterCode: `div { ___: 0.5; }`,
              answer: "opacity",
            },
            {
              question: "What opacity value is fully transparent?",
              type: "fill",
              starterCode: `opacity: ___;`,
              answer: "0.0",
            },
            {
              question: "What opacity value is fully opaque?",
              type: "fill",
              starterCode: `opacity: ___;`,
              answer: "1.0",
            },
          ],
        },
        {
          id: "css-navigation-bars",
          title: "CSS Navigation Bars",
          explanation: "CSS navigation bars are created using lists (<ul> and <li>) styled with CSS. Navigation bars can be horizontal or vertical. Horizontal nav bars use display: inline-block or flexbox. Vertical nav bars use display: block. Navigation bars typically include hover effects, active states, and responsive behavior. Common techniques include removing list markers, styling links, adding hover effects, and creating dropdown menus. Navigation bars are essential for website navigation and user experience.",
          syntax: "Horizontal: display: inline-block or flex\nVertical: display: block\nStyling: list-style: none, padding, margin, background-color",
          examples: [
            {
              title: "CSS Navigation Bars Example",
              description: "Creating navigation bars",
              code: `/* Horizontal navigation */
nav ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  background-color: #333;
}

nav li {
  display: inline-block;
}

nav a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

nav a:hover {
  background-color: #111;
}

/* Vertical navigation */
.vertical-nav ul {
  list-style-type: none;
  width: 200px;
}

.vertical-nav li a {
  display: block;
  padding: 10px;
  background-color: #f1f1f1;
  border-bottom: 1px solid #ccc;
}

.vertical-nav li a:hover {
  background-color: #555;
  color: white;
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "What HTML elements are used for navigation bars?",
              type: "predict",
              starterCode: `<ul> and <li> elements`,
              answer: "ul and li elements",
            },
            {
              question: "What display value creates horizontal navigation?",
              type: "fill",
              starterCode: `nav li { display: ___-block; }`,
              answer: "inline",
            },
            {
              question: "What property removes list markers?",
              type: "fill",
              starterCode: `ul { list-style: ___; }`,
              answer: "none",
            },
          ],
        },
        {
          id: "css-dropdowns",
          title: "CSS Dropdowns",
          explanation: "CSS dropdowns create menus that appear when hovering over or clicking navigation items. Dropdowns are created using nested lists and CSS positioning. The dropdown content is hidden by default using display: none. On hover or click, it's shown using display: block. Position: absolute positions the dropdown relative to its parent. Z-index ensures the dropdown appears above other content. Dropdowns enhance navigation by organizing submenu items. They're commonly used in navigation bars and menus.",
          syntax: "Hidden: display: none;\nShown: display: block;\nPosition: position: absolute;\nTrigger: :hover or :focus",
          examples: [
            {
              title: "CSS Dropdowns Example",
              description: "Creating dropdown menus",
              code: `/* Dropdown container */
.dropdown {
  position: relative;
  display: inline-block;
}

/* Dropdown button */
.dropdown-btn {
  background-color: #4CAF50;
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
}

/* Dropdown content */
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px rgba(0,0,0,0.2);
  z-index: 1;
}

/* Show dropdown on hover */
.dropdown:hover .dropdown-content {
  display: block;
}

/* Dropdown links */
.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {
  background-color: #f1f1f1;
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "What property hides dropdown content by default?",
              type: "fill",
              starterCode: `.dropdown-content { ___: none; }`,
              answer: "display",
            },
            {
              question: "What position value positions dropdown relative to parent?",
              type: "fill",
              starterCode: `.dropdown-content { position: ___; }`,
              answer: "absolute",
            },
            {
              question: "What pseudo-class shows dropdown on hover?",
              type: "fill",
              starterCode: `.dropdown:___ .dropdown-content { display: block; }`,
              answer: "hover",
            },
          ],
        },
        {
          id: "css-image-gallery",
          title: "CSS Image Gallery",
          explanation: "CSS image galleries display multiple images in an organized layout. Galleries can be created using CSS Grid, Flexbox, or float layouts. Images are typically displayed in a grid pattern with consistent spacing. Hover effects can be added for interactivity. Responsive galleries adapt to different screen sizes. Common techniques include using flexbox or grid for layout, adding hover effects, and creating lightbox modals. Image galleries showcase visual content effectively.",
          syntax: "Grid: display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\nFlexbox: display: flex; flex-wrap: wrap;\nHover: img:hover { transform: scale(1.1); }",
          examples: [
            {
              title: "CSS Image Gallery Example",
              description: "Creating an image gallery",
              code: `/* Grid gallery */
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
  padding: 15px;
}

.gallery img {
  width: 100%;
  height: auto;
  border-radius: 5px;
  transition: transform 0.3s;
}

.gallery img:hover {
  transform: scale(1.05);
}

/* Flexbox gallery */
.flex-gallery {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.flex-gallery img {
  flex: 1 1 200px;
  max-width: 100%;
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "What CSS feature creates responsive image grids?",
              type: "predict",
              starterCode: `grid-template-columns: repeat(auto-fit, minmax(200px, 1fr))`,
              answer: "CSS Grid with auto-fit",
            },
            {
              question: "What property creates hover zoom effect?",
              type: "fill",
              starterCode: `img:hover { ___: scale(1.1); }`,
              answer: "transform",
            },
            {
              question: "What display value creates flexible gallery layout?",
              type: "fill",
              starterCode: `.gallery { display: ___; }`,
              answer: "grid",
            },
          ],
        },
        {
          id: "css-image-sprites",
          title: "CSS Image Sprites",
          explanation: "CSS image sprites combine multiple images into a single image file to reduce HTTP requests and improve performance. Sprites are positioned using background-position to show different parts of the sprite. Each element displays a specific portion of the sprite image. Sprites are commonly used for icons, buttons, and small images. They reduce page load time by minimizing server requests. Understanding sprites helps optimize website performance.",
          syntax: "background-image: url('sprite.png');\nbackground-position: x y;\nbackground-repeat: no-repeat;",
          examples: [
            {
              title: "CSS Image Sprites Example",
              description: "Using image sprites",
              code: `/* Sprite container */
.icon {
  width: 32px;
  height: 32px;
  background-image: url('sprite.png');
  background-repeat: no-repeat;
}

/* First icon */
.icon-home {
  background-position: 0 0;
}

/* Second icon */
.icon-user {
  background-position: -32px 0;
}

/* Third icon */
.icon-settings {
  background-position: -64px 0;
}

/* Hover state */
.icon:hover {
  background-position-y: -32px;
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "What property positions sprite images?",
              type: "fill",
              starterCode: `background-___: -32px 0;`,
              answer: "position",
            },
            {
              question: "What is the benefit of using sprites?",
              type: "predict",
              starterCode: `Reduces HTTP requests`,
              answer: "Reduces HTTP requests and improves performance",
            },
            {
              question: "What property prevents sprite repetition?",
              type: "fill",
              starterCode: `background-___: no-repeat;`,
              answer: "repeat",
            },
          ],
        },
        {
          id: "css-attribute-selectors",
          title: "CSS Attribute Selectors",
          explanation: "CSS attribute selectors select elements based on their attributes or attribute values. [attribute] selects elements with the attribute. [attribute='value'] selects elements with exact value. [attribute~='value'] selects elements containing the word. [attribute|='value'] selects elements starting with value. [attribute^='value'] selects elements starting with value. [attribute$='value'] selects elements ending with value. [attribute*='value'] selects elements containing value. Attribute selectors provide powerful element targeting.",
          syntax: "[attribute] { }\n[attribute='value'] { }\n[attribute~='value'] { }\n[attribute^='value'] { }\n[attribute$='value'] { }\n[attribute*='value'] { }",
          examples: [
            {
              title: "CSS Attribute Selectors Example",
              description: "Using attribute selectors",
              code: `/* Has attribute */
input[type] {
  border: 1px solid black;
}

/* Exact value */
input[type="text"] {
  background-color: white;
}

/* Contains word */
a[class~="button"] {
  padding: 10px;
}

/* Starts with */
a[href^="https"] {
  color: green;
}

/* Ends with */
img[src$=".jpg"] {
  border: 2px solid blue;
}

/* Contains */
a[href*="example"] {
  font-weight: bold;
}

/* Multiple attributes */
input[type="text"][required] {
  border-color: red;
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "What selector selects elements with exact attribute value?",
              type: "fill",
              starterCode: `input[type="___"] { }`,
              answer: "text",
            },
            {
              question: "What selector selects elements starting with value?",
              type: "fill",
              starterCode: `a[href___="https"] { }`,
              answer: "^",
            },
            {
              question: "What selector selects elements containing value?",
              type: "fill",
              starterCode: `a[href___="example"] { }`,
              answer: "*",
            },
          ],
        },
        {
          id: "css-forms",
          title: "CSS Forms",
          explanation: "CSS form styling enhances the appearance and usability of HTML forms. Forms can be styled with colors, borders, padding, and spacing. Input fields can have focus states, hover effects, and validation styling. Form layouts can be organized using CSS Grid or Flexbox. Common form styling includes input field styling, button styling, label positioning, and error message styling. Well-styled forms improve user experience and visual appeal.",
          syntax: "input { padding, border, border-radius, background-color }\ninput:focus { outline, border-color }\ninput:valid { border-color }\ninput:invalid { border-color }",
          examples: [
            {
              title: "CSS Forms Example",
              description: "Styling forms",
              code: `/* Input fields */
input[type="text"],
input[type="email"],
textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

/* Focus state */
input:focus {
  border-color: #4CAF50;
  outline: none;
}

/* Valid input */
input:valid {
  border-color: green;
}

/* Invalid input */
input:invalid {
  border-color: red;
}

/* Submit button */
input[type="submit"] {
  background-color: #4CAF50;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type="submit"]:hover {
  background-color: #45a049;
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "What pseudo-class styles focused inputs?",
              type: "fill",
              starterCode: `input:___ { border-color: blue; }`,
              answer: "focus",
            },
            {
              question: "What pseudo-class styles valid inputs?",
              type: "fill",
              starterCode: `input:___ { border-color: green; }`,
              answer: "valid",
            },
            {
              question: "What property removes default outline on focus?",
              type: "fill",
              starterCode: `input:focus { ___: none; }`,
              answer: "outline",
            },
          ],
        },
        {
          id: "css-counters",
          title: "CSS Counters",
          explanation: "CSS counters create automatic numbering for elements. Counters are created with counter-reset and incremented with counter-increment. Counter values are displayed using the counter() or counters() function in the content property. Counters are useful for creating numbered lists, chapter numbering, and step indicators. They automatically update as elements are added or removed. Understanding counters helps create dynamic numbering without JavaScript.",
          syntax: "counter-reset: name;\ncounter-increment: name;\ncontent: counter(name);",
          examples: [
            {
              title: "CSS Counters Example",
              description: "Using CSS counters",
              code: `/* Reset counter */
body {
  counter-reset: section;
}

/* Increment and display */
h2::before {
  counter-increment: section;
  content: "Section " counter(section) ": ";
}

/* Nested counters */
ol {
  counter-reset: item;
}

li {
  counter-increment: item;
}

li::before {
  content: counter(item) ". ";
}

/* Multiple counters */
body {
  counter-reset: chapter section;
}

h1::before {
  counter-increment: chapter;
  content: "Chapter " counter(chapter) ": ";
}

h2::before {
  counter-increment: section;
  content: counter(chapter) "." counter(section) " "; 
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "What property creates a counter?",
              type: "fill",
              starterCode: `body { ___: section; }`,
              answer: "counter-reset",
            },
            {
              question: "What property increments a counter?",
              type: "fill",
              starterCode: `h2::before { ___: section; }`,
              answer: "counter-increment",
            },
            {
              question: "What function displays counter value?",
              type: "fill",
              starterCode: `content: ___(section);`,
              answer: "counter",
            },
          ],
        },
        {
          id: "css-units",
          title: "CSS Units",
          explanation: "CSS units specify sizes for properties like width, height, margin, padding, and font-size. Absolute units include px (pixels), pt (points), cm (centimeters). Relative units include em (relative to parent), rem (relative to root), % (percentage), vw/vh (viewport width/height), vmin/vmax (viewport min/max). Relative units are better for responsive design. Understanding different units helps create flexible and responsive layouts.",
          syntax: "Absolute: px, pt, cm, mm, in\nRelative: em, rem, %, vw, vh, vmin, vmax",
          examples: [
            {
              title: "CSS Units Example",
              description: "Using different CSS units",
              code: `/* Pixels (absolute) */
div {
  width: 300px;
  font-size: 16px;
}

/* Em (relative to parent) */
p {
  font-size: 1.2em;
}

/* Rem (relative to root) */
h1 {
  font-size: 2rem;
}

/* Percentage */
.container {
  width: 80%;
}

/* Viewport units */
.fullscreen {
  width: 100vw;
  height: 100vh;
}

/* Combined */
.responsive {
  width: 90%;
  max-width: 1200px;
  padding: 2rem;
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "What unit is relative to the root element?",
              type: "fill",
              starterCode: `font-size: 2___;`,
              answer: "rem",
            },
            {
              question: "What unit represents viewport width?",
              type: "fill",
              starterCode: `width: 100___;`,
              answer: "vw",
            },
            {
              question: "What unit is better for responsive design?",
              type: "predict",
              starterCode: `Relative units like em, rem, %`,
              answer: "Relative units (em, rem, %, vw, vh)",
            },
          ],
        },
        {
          id: "css-inheritance",
          title: "CSS Inheritance",
          explanation: "CSS inheritance allows child elements to inherit certain properties from their parent elements. Inherited properties include color, font-family, font-size, line-height, text-align, and more. Non-inherited properties include width, height, margin, padding, border, and background. The inherit keyword explicitly inherits a property. Understanding inheritance helps write more efficient CSS and maintain consistent styling across elements.",
          syntax: "Inherited: color, font-family, text-align\nNon-inherited: width, height, margin, padding\nExplicit: property: inherit;",
          examples: [
            {
              title: "CSS Inheritance Example",
              description: "Understanding CSS inheritance",
              code: `/* Parent styles */
body {
  color: blue;
  font-family: Arial;
  font-size: 16px;
}

/* Child inherits color and font */
p {
  /* Inherits color: blue and font-family: Arial */
}

/* Override inheritance */
.special {
  color: red; /* Overrides inherited blue */
}

/* Explicit inheritance */
.child {
  color: inherit; /* Explicitly inherits from parent */
}

/* Non-inherited properties */
.parent {
  width: 500px;
  margin: 20px;
}

.child {
  /* Does NOT inherit width or margin */
  width: 300px; /* Must be set explicitly */
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "What property is inherited by default?",
              type: "predict",
              starterCode: `color, font-family`,
              answer: "color, font-family, font-size, text-align",
            },
            {
              question: "What keyword explicitly inherits a property?",
              type: "fill",
              starterCode: `color: ___;`,
              answer: "inherit",
            },
            {
              question: "Is margin inherited?",
              type: "predict",
              starterCode: `margin property`,
              answer: "No, margin is not inherited",
            },
          ],
        },
        {
          id: "css-specificity",
          title: "CSS Specificity",
          explanation: "CSS specificity determines which styles are applied when multiple rules target the same element. Specificity is calculated based on selector types: inline styles (1000), IDs (100), classes/attributes/pseudo-classes (10), elements/pseudo-elements (1). Higher specificity wins. The !important rule overrides specificity. Understanding specificity helps resolve style conflicts and write maintainable CSS. Specificity calculators help determine which styles will apply.",
          syntax: "Specificity calculation:\nInline: 1000\nID: 100\nClass: 10\nElement: 1",
          examples: [
            {
              title: "CSS Specificity Example",
              description: "Understanding CSS specificity",
              code: `/* Specificity: 1 (element) */
p {
  color: blue;
}

/* Specificity: 10 (class) */
.text {
  color: red; /* Wins over p */
}

/* Specificity: 100 (ID) */
#special {
  color: green; /* Wins over .text */
}

/* Specificity: 11 (class + element) */
p.text {
  color: purple; /* Wins over .text */
}

/* Specificity: 1000 (inline) */
<p style="color: orange;"> /* Wins over all */

/* !important overrides all */
p {
  color: black !important; /* Highest priority */
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "What has the highest specificity?",
              type: "predict",
              starterCode: `Inline styles, IDs, classes, elements`,
              answer: "Inline styles (1000)",
            },
            {
              question: "What is ID selector specificity?",
              type: "fill",
              starterCode: `ID selector = ___ points`,
              answer: "100",
            },
            {
              question: "What rule overrides specificity?",
              type: "fill",
              starterCode: `color: red ___;`,
              answer: "!important",
            },
          ],
        },
        {
          id: "css-important",
          title: "CSS !important",
          explanation: "The CSS !important rule gives a declaration the highest priority, overriding normal specificity rules. !important should be used sparingly as it makes CSS harder to maintain and debug. It overrides inline styles, IDs, classes, and elements. Multiple !important rules follow normal specificity. Overusing !important creates specificity wars and makes stylesheets difficult to maintain. It's best to use proper specificity instead.",
          syntax: "property: value !important;",
          examples: [
            {
              title: "CSS !important Example",
              description: "Using !important rule",
              code: `/* Normal rule */
p {
  color: blue;
}

/* Override with !important */
p {
  color: red !important; /* Wins even if more specific rule exists */
}

/* Multiple !important */
.text {
  color: green !important;
}

#special {
  color: purple !important; /* Wins due to higher specificity */
}

/* Avoid overuse */
/* BAD */
div {
  margin: 10px !important;
  padding: 10px !important;
  color: black !important;
}

/* GOOD - Use proper specificity */
.container .content {
  margin: 10px;
  padding: 10px;
  color: black;
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "What rule gives highest priority?",
              type: "fill",
              starterCode: `color: red ___;`,
              answer: "!important",
            },
            {
              question: "Should !important be used frequently?",
              type: "predict",
              starterCode: `!important makes CSS harder to maintain`,
              answer: "No, it should be used sparingly",
            },
            {
              question: "What does !important override?",
              type: "predict",
              starterCode: `Overrides normal specificity`,
              answer: "All normal specificity rules including inline styles",
            },
          ],
        },
        {
          id: "css-math-functions",
          title: "CSS Math Functions",
          explanation: "CSS math functions perform calculations in CSS. calc() performs calculations with different units. min() returns the smallest value. max() returns the largest value. clamp() clamps a value between min and max. Math functions enable dynamic sizing and responsive design. They're useful for creating flexible layouts that adapt to different screen sizes. Math functions work with any numeric value.",
          syntax: "calc(expression)\nmin(value1, value2)\nmax(value1, value2)\nclamp(min, preferred, max)",
          examples: [
            {
              title: "CSS Math Functions Example",
              description: "Using CSS math functions",
              code: `/* Calc */
.container {
  width: calc(100% - 40px);
  padding: calc(2rem + 10px);
}

/* Min */
.responsive {
  width: min(100%, 1200px);
}

/* Max */
.content {
  width: max(300px, 50%);
}

/* Clamp */
.heading {
  font-size: clamp(1rem, 4vw, 3rem);
}

/* Combined */
.box {
  width: calc(100% - min(40px, 5%));
  margin: max(10px, 2rem);
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "What function performs calculations?",
              type: "fill",
              starterCode: `width: ___(100% - 40px);`,
              answer: "calc",
            },
            {
              question: "What function returns the smallest value?",
              type: "fill",
              starterCode: `width: ___(100%, 1200px);`,
              answer: "min",
            },
            {
              question: "What function clamps a value between min and max?",
              type: "fill",
              starterCode: `font-size: ___(1rem, 4vw, 3rem);`,
              answer: "clamp",
            },
          ],
        },
        {
          id: "css-optimization",
          title: "CSS Optimization",
          explanation: "CSS optimization improves website performance and load times. Techniques include minifying CSS (removing whitespace), combining CSS files, removing unused CSS, using efficient selectors, avoiding !important, using shorthand properties, and leveraging browser caching. Optimized CSS loads faster and improves user experience. Tools like CSS minifiers, purgers, and analyzers help optimize stylesheets. Performance optimization is essential for fast websites.",
          syntax: "Optimization techniques:\nMinify: Remove whitespace\nCombine: Merge files\nRemove: Unused CSS\nCache: Browser caching",
          examples: [
            {
              title: "CSS Optimization Example",
              description: "CSS optimization techniques",
              code: `/* Before optimization */
.container {
  margin-top: 10px;
  margin-right: 20px;
  margin-bottom: 10px;
  margin-left: 20px;
  padding-top: 5px;
  padding-right: 10px;
  padding-bottom: 5px;
  padding-left: 10px;
}

/* After optimization (shorthand) */
.container {
  margin: 10px 20px;
  padding: 5px 10px;
}

/* Efficient selector */
.nav-item { } /* Good */

/* Inefficient selector */
div div div div .nav-item { } /* Bad */

/* Minified CSS */
.container{margin:10px 20px;padding:5px 10px}

/* Use CSS variables */
:root {
  --primary-color: #4CAF50;
  --spacing: 10px;
}

.button {
  background-color: var(--primary-color);
  padding: var(--spacing);
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "What technique removes whitespace from CSS?",
              type: "fill",
              starterCode: `CSS ___ removes whitespace`,
              answer: "minification",
            },
            {
              question: "What improves CSS performance?",
              type: "predict",
              starterCode: `Minifying, combining files, removing unused CSS`,
              answer: "Minifying, combining files, removing unused CSS",
            },
            {
              question: "What should be avoided for optimization?",
              type: "predict",
              starterCode: `Deep selectors, !important, unused CSS`,
              answer: "Deep selectors, excessive !important, unused CSS",
            },
          ],
        },
        {
          id: "css-accessibility",
          title: "CSS Accessibility",
          explanation: "CSS accessibility ensures websites are usable by people with disabilities. Techniques include sufficient color contrast, focus indicators, readable font sizes, proper spacing, and avoiding color-only information. CSS can enhance accessibility with focus styles, high contrast modes, and responsive text sizing. Accessible CSS improves usability for all users. Following accessibility guidelines ensures websites comply with standards like WCAG.",
          syntax: "Focus: :focus { outline, border-color }\nContrast: color contrast ratios\nMedia queries: @media (prefers-contrast: high)",
          examples: [
            {
              title: "CSS Accessibility Example",
              description: "Creating accessible CSS",
              code: `/* Focus indicators */
a:focus,
button:focus {
  outline: 2px solid blue;
  outline-offset: 2px;
}

/* Sufficient contrast */
.text {
  color: #000000; /* Black */
  background-color: #ffffff; /* White - high contrast */
}

/* Readable font size */
body {
  font-size: 16px; /* Minimum readable size */
}

/* High contrast mode */
@media (prefers-contrast: high) {
  .text {
    color: #000000;
    background-color: #ffffff;
  }
}

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  * {
    animation: none;
    transition: none;
  }
}

/* Skip link */
.skip-link {
  position: absolute;
  top: -40px;
}

.skip-link:focus {
  top: 0;
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "What pseudo-class improves keyboard navigation?",
              type: "fill",
              starterCode: `a:___ { outline: 2px solid blue; }`,
              answer: "focus",
            },
            {
              question: "What is important for text readability?",
              type: "predict",
              starterCode: `Color contrast, font size`,
              answer: "Sufficient color contrast and readable font size",
            },
            {
              question: "What media query respects user preferences?",
              type: "fill",
              starterCode: `@media (prefers-___-motion: reduce) { }`,
              answer: "reduced",
            },
          ],
        },
        {
          id: "css-website-layout",
          title: "CSS Website Layout",
          explanation: "CSS website layouts structure page content using various techniques. Traditional layouts used floats and positioning. Modern layouts use Flexbox and Grid. Common layout patterns include header, navigation, main content, sidebar, and footer. Responsive layouts adapt to different screen sizes. CSS Grid and Flexbox provide powerful layout tools. Understanding layout techniques helps create well-structured, maintainable websites.",
          syntax: "Grid: display: grid; grid-template-areas\nFlexbox: display: flex\nTraditional: float, position",
          examples: [
            {
              title: "CSS Website Layout Example",
              description: "Creating website layouts",
              code: `/* Grid layout */
.container {
  display: grid;
  grid-template-areas:
    "header header"
    "nav nav"
    "main sidebar"
    "footer footer";
  grid-template-columns: 1fr 300px;
  gap: 20px;
}

header {
  grid-area: header;
}

nav {
  grid-area: nav;
}

main {
  grid-area: main;
}

aside {
  grid-area: sidebar;
}

footer {
  grid-area: footer;
}

/* Flexbox layout */
.flex-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.header {
  flex: 0 0 auto;
}

.content {
  flex: 1 1 auto;
}

.footer {
  flex: 0 0 auto;
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "What modern CSS feature creates layouts?",
              type: "predict",
              starterCode: `CSS Grid and Flexbox`,
              answer: "CSS Grid and Flexbox",
            },
            {
              question: "What property defines grid areas?",
              type: "fill",
              starterCode: `grid-template-___: "header header";`,
              answer: "areas",
            },
            {
              question: "What layout pattern includes header, main, footer?",
              type: "predict",
              starterCode: `Common website structure`,
              answer: "Standard website layout pattern",
            },
          ],
        },
      ],
    },
    {
      id: "advanced",
      title: "CSS Advanced",
      topics: [
        {
          id: "css-rounded-corners",
          title: "CSS Rounded Corners",
          explanation: "The CSS border-radius property creates rounded corners on elements. Border-radius can be set for all corners or individual corners. Values can be in pixels, percentages, or other units. Rounded corners create softer, more modern designs. Border-radius is commonly used for buttons, cards, images, and containers. It's a simple way to enhance visual appeal without images.",
          syntax: "border-radius: value;\nborder-radius: top-left top-right bottom-right bottom-left;\nborder-top-left-radius: value;",
          examples: [
            {
              title: "CSS Rounded Corners Example",
              description: "Creating rounded corners",
              code: `/* All corners */
.button {
  border-radius: 10px;
}

/* Individual corners */
.box {
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

/* Shorthand (4 values) */
.card {
  border-radius: 10px 20px 30px 40px;
}

/* Circle */
.circle {
  border-radius: 50%;
  width: 100px;
  height: 100px;
}

/* Ellipse */
.ellipse {
  border-radius: 50% / 20%;
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "What property creates rounded corners?",
              type: "fill",
              starterCode: `div { ___: 10px; }`,
              answer: "border-radius",
            },
            {
              question: "What value creates a perfect circle?",
              type: "fill",
              starterCode: `border-radius: ___;`,
              answer: "50%",
            },
            {
              question: "How many values can border-radius accept?",
              type: "predict",
              starterCode: `border-radius: 10px 20px 30px 40px;`,
              answer: "1 to 4 values",
            },
          ],
        },
        {
          id: "css-border-images",
          title: "CSS Border Images",
          explanation: "The CSS border-image property uses an image as the border of an element. Border-image slices the image into 9 parts (corners, edges, center). The border-image-source specifies the image. Border-image-slice defines how to slice the image. Border-image-width sets border width. Border-image-outset extends the border area. Border-image-repeat controls how edges are repeated. Border images create decorative borders without using multiple elements.",
          syntax: "border-image: source slice width outset repeat;\nborder-image-source: url('image.png');\nborder-image-slice: value;",
          examples: [
            {
              title: "CSS Border Images Example",
              description: "Using border images",
              code: `/* Border image */
div {
  border: 10px solid transparent;
  border-image: url('border.png') 30 round;
}

/* Individual properties */
.box {
  border-image-source: url('pattern.png');
  border-image-slice: 30;
  border-image-width: 10px;
  border-image-outset: 0;
  border-image-repeat: round;
}

/* Stretch edges */
.stretch {
  border-image: url('border.png') 30 stretch;
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "What property uses an image as border?",
              type: "fill",
              starterCode: `div { ___: url('border.png') 30 round; }`,
              answer: "border-image",
            },
            {
              question: "What property defines image slicing?",
              type: "fill",
              starterCode: `border-image-___: 30;`,
              answer: "slice",
            },
            {
              question: "How many parts does border-image slice into?",
              type: "predict",
              starterCode: `9 parts (corners, edges, center)`,
              answer: "9 parts",
            },
          ],
        },
        {
          id: "css-color-keywords",
          title: "CSS Color Keywords",
          explanation: "CSS provides predefined color keywords that can be used instead of hex codes or RGB values. Common keywords include basic colors (red, blue, green), extended colors (coral, turquoise, salmon), and system colors (currentColor, transparent). Color keywords are easier to remember than hex codes. They're useful for quick styling and prototyping. CSS supports 140+ color keywords.",
          syntax: "color: red;\ncolor: blue;\ncolor: transparent;\ncolor: currentColor;",
          examples: [
            {
              title: "CSS Color Keywords Example",
              description: "Using color keywords",
              code: `/* Basic colors */
.text {
  color: red;
  background-color: blue;
}

/* Extended colors */
.highlight {
  color: coral;
  background-color: turquoise;
}

/* System colors */
.transparent {
  background-color: transparent;
}

.inherit {
  color: currentColor;
}

/* Common keywords */
.primary {
  color: navy;
}

.secondary {
  color: teal;
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "What keyword makes background transparent?",
              type: "fill",
              starterCode: `background-color: ___;`,
              answer: "transparent",
            },
            {
              question: "What keyword inherits current color?",
              type: "fill",
              starterCode: `color: ___;`,
              answer: "currentColor",
            },
            {
              question: "How many color keywords does CSS support?",
              type: "predict",
              starterCode: `140+ color keywords`,
              answer: "140+ color keywords",
            },
          ],
        },
        {
          id: "css-gradients",
          title: "CSS Gradients",
          explanation: "CSS gradients create smooth color transitions. Linear gradients transition along a line. Radial gradients transition from a center point. Conic gradients transition around a center point. Gradients can use multiple colors and color stops. Gradients are created using linear-gradient(), radial-gradient(), or conic-gradient() functions. They're used for backgrounds, buttons, and decorative elements. Gradients create modern, visually appealing designs.",
          syntax: "background: linear-gradient(direction, color1, color2);\nbackground: radial-gradient(shape, color1, color2);\nbackground: conic-gradient(color1, color2);",
          examples: [
            {
              title: "CSS Gradients Example",
              description: "Creating gradients",
              code: `/* Linear gradient */
.linear {
  background: linear-gradient(to right, red, blue);
}

/* Linear gradient with angle */
.angled {
  background: linear-gradient(45deg, yellow, green);
}

/* Radial gradient */
.radial {
  background: radial-gradient(circle, red, blue);
}

/* Multiple color stops */
.multi {
  background: linear-gradient(to right, red, yellow, green, blue);
}

/* Conic gradient */
.conic {
  background: conic-gradient(red, yellow, green, blue, red);
}

/* Repeating gradient */
.repeat {
  background: repeating-linear-gradient(45deg, red, red 10px, blue 10px, blue 20px);
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "What function creates linear gradients?",
              type: "fill",
              starterCode: `background: ___-gradient(to right, red, blue);`,
              answer: "linear",
            },
            {
              question: "What gradient transitions from center?",
              type: "fill",
              starterCode: `background: ___-gradient(circle, red, blue);`,
              answer: "radial",
            },
            {
              question: "What gradient transitions around center?",
              type: "fill",
              starterCode: `background: ___-gradient(red, blue);`,
              answer: "conic",
            },
          ],
        },
        {
          id: "css-shadows",
          title: "CSS Shadows",
          explanation: "CSS shadows add depth and dimension to elements. Box-shadow creates shadows for boxes. Text-shadow creates shadows for text. Shadows can have color, blur, spread, and offset. Multiple shadows can be applied to create layered effects. Shadows enhance visual hierarchy and create modern designs. They're commonly used for cards, buttons, and text effects.",
          syntax: "box-shadow: offset-x offset-y blur spread color;\ntext-shadow: offset-x offset-y blur color;",
          examples: [
            {
              title: "CSS Shadows Example",
              description: "Using shadows",
              code: `/* Box shadow */
.card {
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
}

/* Inset shadow */
.inset {
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.5);
}

/* Multiple shadows */
.layered {
  box-shadow: 
    0 2px 4px rgba(0, 0, 0, 0.1),
    0 4px 8px rgba(0, 0, 0, 0.1);
}

/* Text shadow */
.text {
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

/* Multiple text shadows */
.glow {
  text-shadow: 
    0 0 10px blue,
    0 0 20px blue,
    0 0 30px blue;
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "What property creates box shadows?",
              type: "fill",
              starterCode: `div { ___: 5px 5px 10px gray; }`,
              answer: "box-shadow",
            },
            {
              question: "What property creates text shadows?",
              type: "fill",
              starterCode: `h1 { ___: 2px 2px 4px gray; }`,
              answer: "text-shadow",
            },
            {
              question: "What keyword creates inner shadow?",
              type: "fill",
              starterCode: `box-shadow: ___ 0 0 10px gray;`,
              answer: "inset",
            },
          ],
        },
        {
          id: "css-text-effects",
          title: "CSS Text Effects",
          explanation: "CSS text effects enhance typography with visual styling. Text-shadow adds shadows. Text-overflow handles overflowing text. Word-wrap breaks long words. Word-break controls word breaking. Writing-mode changes text direction. Text effects create visually appealing typography and improve readability. They're used for headings, decorative text, and responsive text handling.",
          syntax: "text-shadow: offset-x offset-y blur color;\ntext-overflow: ellipsis|clip;\nword-wrap: break-word;\nword-break: break-all;\nwriting-mode: horizontal-tb|vertical-rl;",
          examples: [
            {
              title: "CSS Text Effects Example",
              description: "Using text effects",
              code: `/* Text shadow */
h1 {
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

/* Text overflow */
.ellipsis {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* Word wrap */
.long-text {
  word-wrap: break-word;
  width: 200px;
}

/* Word break */
.break-all {
  word-break: break-all;
}

/* Vertical text */
.vertical {
  writing-mode: vertical-rl;
}

/* Multiple shadows */
.glow-text {
  text-shadow: 
    0 0 5px blue,
    0 0 10px blue,
    0 0 15px blue;
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "What property adds text shadows?",
              type: "fill",
              starterCode: `h1 { ___: 2px 2px 4px gray; }`,
              answer: "text-shadow",
            },
            {
              question: "What value creates ellipsis for overflow?",
              type: "fill",
              starterCode: `text-overflow: ___;`,
              answer: "ellipsis",
            },
            {
              question: "What property breaks long words?",
              type: "fill",
              starterCode: `word-___: break-word;`,
              answer: "wrap",
            },
          ],
        },
        {
          id: "css-custom-fonts",
          title: "CSS Custom Fonts",
          explanation: "CSS custom fonts allow using fonts not installed on user's system. Custom fonts are loaded using @font-face rule. Font files can be in WOFF, WOFF2, TTF, OTF, or EOT formats. WOFF2 is the modern standard. Custom fonts enable brand consistency and unique typography. Fonts are loaded from URLs or local files. Fallback fonts should be specified for compatibility.",
          syntax: "@font-face {\n  font-family: 'Name';\n  src: url('font.woff2') format('woff2');\n}\n\nUsage: font-family: 'Name', fallback;",
          examples: [
            {
              title: "CSS Custom Fonts Example",
              description: "Using custom fonts",
              code: `/* Define custom font */
@font-face {
  font-family: 'CustomFont';
  src: url('font.woff2') format('woff2'),
       url('font.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}

/* Use custom font */
.heading {
  font-family: 'CustomFont', Arial, sans-serif;
}

/* Multiple font weights */
@font-face {
  font-family: 'CustomFont';
  src: url('font-bold.woff2') format('woff2');
  font-weight: bold;
}

@font-face {
  font-family: 'CustomFont';
  src: url('font-italic.woff2') format('woff2');
  font-style: italic;
}

/* Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Roboto');

body {
  font-family: 'Roboto', sans-serif;
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "What rule loads custom fonts?",
              type: "fill",
              starterCode: `@___-face { font-family: 'Font'; }`,
              answer: "font",
            },
            {
              question: "What is the modern font format?",
              type: "fill",
              starterCode: `src: url('font.___') format('woff2');`,
              answer: "woff2",
            },
            {
              question: "What property specifies font family?",
              type: "fill",
              starterCode: `font-___: 'CustomFont', Arial;`,
              answer: "family",
            },
          ],
        },
        {
          id: "css-2d-transforms",
          title: "CSS 2D Transforms",
          explanation: "CSS 2D transforms modify elements in two-dimensional space. Transform functions include translate() (move), rotate() (rotate), scale() (resize), skew() (distort), and matrix() (combine). Transforms don't affect document flow. Multiple transforms can be combined. Transform-origin sets the transformation point. Transforms create animations, hover effects, and dynamic layouts. They're hardware-accelerated for better performance.",
          syntax: "transform: function(value);\ntransform: translate(x, y);\ntransform: rotate(angle);\ntransform: scale(x, y);\ntransform: skew(x, y);",
          examples: [
            {
              title: "CSS 2D Transforms Example",
              description: "Using 2D transforms",
              code: `/* Translate (move) */
.moved {
  transform: translate(50px, 100px);
}

/* Rotate */
.rotated {
  transform: rotate(45deg);
}

/* Scale */
.scaled {
  transform: scale(1.5);
}

.scaled-xy {
  transform: scale(2, 0.5);
}

/* Skew */
.skewed {
  transform: skew(20deg, 10deg);
}

/* Multiple transforms */
.combined {
  transform: translate(50px, 50px) rotate(45deg) scale(1.2);
}

/* Transform origin */
.origin {
  transform-origin: top left;
  transform: rotate(45deg);
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "What function moves an element?",
              type: "fill",
              starterCode: `transform: ___(50px, 100px);`,
              answer: "translate",
            },
            {
              question: "What function rotates an element?",
              type: "fill",
              starterCode: `transform: ___(45deg);`,
              answer: "rotate",
            },
            {
              question: "What function resizes an element?",
              type: "fill",
              starterCode: `transform: ___(1.5);`,
              answer: "scale",
            },
          ],
        },
        {
          id: "css-3d-transforms",
          title: "CSS 3D Transforms",
          explanation: "CSS 3D transforms modify elements in three-dimensional space. 3D transform functions include translate3d(), rotateX(), rotateY(), rotateZ(), scale3d(), and perspective(). The perspective property creates 3D space. Transform-style: preserve-3d maintains 3D positioning. Backface-visibility controls visibility of back face. 3D transforms create depth and realistic effects. They're used for cards, cubes, and interactive 3D elements.",
          syntax: "transform: translate3d(x, y, z);\ntransform: rotateX(angle);\ntransform: rotateY(angle);\ntransform: rotateZ(angle);\nperspective: value;",
          examples: [
            {
              title: "CSS 3D Transforms Example",
              description: "Using 3D transforms",
              code: `/* Perspective */
.container {
  perspective: 1000px;
}

/* 3D rotate */
.card {
  transform: rotateY(45deg);
}

/* 3D translate */
.moved {
  transform: translate3d(50px, 50px, 100px);
}

/* Multiple 3D transforms */
.cube {
  transform: rotateX(45deg) rotateY(45deg);
}

/* Preserve 3D */
.parent {
  transform-style: preserve-3d;
}

.child {
  transform: translateZ(50px);
}

/* Backface visibility */
.flip-card {
  backface-visibility: hidden;
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "What property creates 3D space?",
              type: "fill",
              starterCode: `.container { ___: 1000px; }`,
              answer: "perspective",
            },
            {
              question: "What function rotates around Y-axis?",
              type: "fill",
              starterCode: `transform: ___(45deg);`,
              answer: "rotateY",
            },
            {
              question: "What value maintains 3D positioning?",
              type: "fill",
              starterCode: `transform-style: ___-3d;`,
              answer: "preserve",
            },
          ],
        },
        {
          id: "css-transitions",
          title: "CSS Transitions",
          explanation: "CSS transitions create smooth animations between property changes. Transitions are triggered by state changes like :hover or :focus. The transition-property specifies which properties animate. Transition-duration sets animation time. Transition-timing-function controls animation speed curve. Transition-delay sets delay before animation starts. The transition shorthand combines all properties. Transitions enhance user experience with smooth interactions.",
          syntax: "transition: property duration timing-function delay;\ntransition-property: property;\ntransition-duration: time;\ntransition-timing-function: ease|linear|ease-in|ease-out|ease-in-out;",
          examples: [
            {
              title: "CSS Transitions Example",
              description: "Using transitions",
              code: `/* Basic transition */
.button {
  background-color: blue;
  transition: background-color 0.3s;
}

.button:hover {
  background-color: red;
}

/* Multiple properties */
.card {
  transition: transform 0.3s, box-shadow 0.3s;
}

.card:hover {
  transform: scale(1.05);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
}

/* Timing function */
.smooth {
  transition: all 0.5s ease-in-out;
}

/* Delay */
.delayed {
  transition: opacity 0.3s ease 0.5s;
}

/* Shorthand */
.element {
  transition: width 0.3s ease-in-out 0.1s;
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "What property creates smooth animations?",
              type: "fill",
              starterCode: `div { ___: all 0.3s; }`,
              answer: "transition",
            },
            {
              question: "What property sets animation time?",
              type: "fill",
              starterCode: `transition-___: 0.3s;`,
              answer: "duration",
            },
            {
              question: "What timing function creates smooth start and end?",
              type: "fill",
              starterCode: `transition-timing-function: ___-in-out;`,
              answer: "ease",
            },
          ],
        },
        {
          id: "css-animations",
          title: "CSS Animations",
          explanation: "CSS animations create complex, multi-step animations using @keyframes. Animations are more powerful than transitions and can loop, reverse, and have multiple keyframes. The animation-name references @keyframes. Animation-duration sets duration. Animation-timing-function controls speed curve. Animation-delay sets delay. Animation-iteration-count sets repetitions. Animation-direction controls direction. Animation-fill-mode controls styles before/after. Animations create engaging, interactive experiences.",
          syntax: "@keyframes name {\n  from { }\n  to { }\n}\n\nanimation: name duration timing-function delay iteration-count direction;",
          examples: [
            {
              title: "CSS Animations Example",
              description: "Creating animations",
              code: `/* Define animation */
@keyframes slide {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(100px);
  }
}

/* Use animation */
.box {
  animation: slide 2s ease-in-out infinite;
}

/* Multiple keyframes */
@keyframes bounce {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-50px);
  }
  100% {
    transform: translateY(0);
  }
}

.bouncing {
  animation: bounce 1s ease-in-out infinite;
}

/* Animation properties */
.animated {
  animation-name: slide;
  animation-duration: 2s;
  animation-timing-function: ease;
  animation-delay: 0.5s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "What rule defines animations?",
              type: "fill",
              starterCode: `@___ slide { from { } to { } }`,
              answer: "keyframes",
            },
            {
              question: "What value makes animation repeat forever?",
              type: "fill",
              starterCode: `animation-iteration-count: ___;`,
              answer: "infinite",
            },
            {
              question: "What property references @keyframes?",
              type: "fill",
              starterCode: `animation-___: slide;`,
              answer: "name",
            },
          ],
        },
        {
          id: "css-tooltips",
          title: "CSS Tooltips",
          explanation: "CSS tooltips display additional information when hovering over elements. Tooltips are created using pseudo-elements (::before or ::after) with the content property. They're positioned using absolute positioning. Tooltips appear on hover using :hover pseudo-class. Tooltips enhance user experience by providing contextual information. They're commonly used for icons, buttons, and links.",
          syntax: ".tooltip:hover::after {\n  content: 'Text';\n  position: absolute;\n}\n\nOr using data attributes: [data-tooltip]",
          examples: [
            {
              title: "CSS Tooltips Example",
              description: "Creating tooltips",
              code: `/* Basic tooltip */
.tooltip {
  position: relative;
}

.tooltip:hover::after {
  content: "Tooltip text";
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  background-color: black;
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
  white-space: nowrap;
}

/* Tooltip with data attribute */
[data-tooltip] {
  position: relative;
}

[data-tooltip]:hover::before {
  content: attr(data-tooltip);
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  background-color: #333;
  color: white;
  padding: 8px;
  border-radius: 4px;
  font-size: 12px;
}

/* Arrow tooltip */
.tooltip-arrow:hover::after {
  content: "Tooltip";
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  background-color: black;
  color: white;
  padding: 5px 10px;
}

.tooltip-arrow:hover::before {
  content: "";
  position: absolute;
  bottom: 95%;
  left: 50%;
  transform: translateX(-50%);
  border: 5px solid transparent;
  border-top-color: black;
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "What pseudo-element creates tooltips?",
              type: "fill",
              starterCode: `.tooltip:hover::___ { content: "Text"; }`,
              answer: "after",
            },
            {
              question: "What property provides tooltip text?",
              type: "fill",
              starterCode: `content: ___(data-tooltip);`,
              answer: "attr",
            },
            {
              question: "What pseudo-class triggers tooltip?",
              type: "fill",
              starterCode: `.tooltip:___::after { }`,
              answer: "hover",
            },
          ],
        },
        {
          id: "css-image-styling",
          title: "CSS Image Styling",
          explanation: "CSS can style images with borders, shadows, filters, and effects. Images can be made responsive, rounded, or filtered. Common image styling includes border-radius for rounded corners, box-shadow for depth, filters for effects, and object-fit for sizing. Image styling enhances visual appeal and creates consistent designs. Responsive images adapt to container sizes.",
          syntax: "img { border-radius, box-shadow, filter, object-fit, width, height }",
          examples: [
            {
              title: "CSS Image Styling Example",
              description: "Styling images",
              code: `/* Rounded corners */
img {
  border-radius: 10px;
}

/* Shadow */
.image-shadow {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
}

/* Filters */
.grayscale {
  filter: grayscale(100%);
}

.blur {
  filter: blur(5px);
}

.brightness {
  filter: brightness(150%);
}

/* Responsive */
.responsive-img {
  max-width: 100%;
  height: auto;
}

/* Object fit */
.cover-img {
  width: 300px;
  height: 200px;
  object-fit: cover;
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "What property creates rounded image corners?",
              type: "fill",
              starterCode: `img { ___: 10px; }`,
              answer: "border-radius",
            },
            {
              question: "What property applies visual effects to images?",
              type: "fill",
              starterCode: `img { ___: grayscale(100%); }`,
              answer: "filter",
            },
            {
              question: "What property makes images responsive?",
              type: "fill",
              starterCode: `img { ___: 100%; height: auto; }`,
              answer: "max-width",
            },
          ],
        },
        {
          id: "css-image-modal",
          title: "CSS Image Modal",
          explanation: "CSS image modals create lightbox effects for viewing images in full size. Modals overlay the page content and display images centered. Modals are hidden by default and shown on click. They use fixed positioning to cover the viewport. Z-index ensures modals appear above other content. Close buttons allow dismissing modals. Image modals enhance image viewing experience.",
          syntax: ".modal { display: none; position: fixed; z-index: high; }\n.modal.show { display: block; }",
          examples: [
            {
              title: "CSS Image Modal Example",
              description: "Creating image modals",
              code: `/* Modal container */
.modal {
  display: none;
  position: fixed;
  z-index: 1000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
}

/* Show modal */
.modal.show {
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Modal image */
.modal img {
  max-width: 90%;
  max-height: 90%;
  border-radius: 5px;
}

/* Close button */
.close {
  position: absolute;
  top: 20px;
  right: 35px;
  color: white;
  font-size: 40px;
  font-weight: bold;
  cursor: pointer;
}

.close:hover {
  color: #ccc;
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "What position value creates full-screen modal?",
              type: "fill",
              starterCode: `.modal { position: ___; }`,
              answer: "fixed",
            },
            {
              question: "What property hides modal by default?",
              type: "fill",
              starterCode: `.modal { ___: none; }`,
              answer: "display",
            },
            {
              question: "What z-index value ensures modal appears on top?",
              type: "predict",
              starterCode: `z-index: 1000`,
              answer: "High value (e.g., 1000)",
            },
          ],
        },
        {
          id: "css-image-centering",
          title: "CSS Image Centering",
          explanation: "CSS can center images horizontally, vertically, or both. Horizontal centering uses margin: 0 auto for block images or text-align: center for inline images. Vertical centering uses flexbox, grid, or positioning. Centering techniques depend on image display type and container. Centered images create balanced layouts and improve visual appeal.",
          syntax: "Horizontal: margin: 0 auto; or text-align: center;\nVertical: display: flex; align-items: center;\nBoth: display: flex; align-items: center; justify-content: center;",
          examples: [
            {
              title: "CSS Image Centering Example",
              description: "Centering images",
              code: `/* Horizontal centering (block) */
img {
  display: block;
  margin: 0 auto;
}

/* Horizontal centering (inline) */
.container {
  text-align: center;
}

/* Vertical centering (flexbox) */
.flex-container {
  display: flex;
  align-items: center;
  height: 400px;
}

/* Both directions (flexbox) */
.center-both {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 400px;
}

/* Grid centering */
.grid-center {
  display: grid;
  place-items: center;
  height: 400px;
}

/* Absolute positioning */
.absolute-center {
  position: relative;
}

.absolute-center img {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "What centers a block image horizontally?",
              type: "fill",
              starterCode: `img { margin: 0 ___; }`,
              answer: "auto",
            },
            {
              question: "What flexbox property centers vertically?",
              type: "fill",
              starterCode: `display: flex; ___: center;`,
              answer: "align-items",
            },
            {
              question: "What grid property centers in both directions?",
              type: "fill",
              starterCode: `place-___: center;`,
              answer: "items",
            },
          ],
        },
        {
          id: "css-image-filters",
          title: "CSS Image Filters",
          explanation: "CSS filter property applies visual effects to images and elements. Filter functions include blur(), brightness(), contrast(), grayscale(), hue-rotate(), invert(), opacity(), saturate(), and sepia(). Multiple filters can be combined. Filters create artistic effects and enhance images. They're commonly used for hover effects, overlays, and image manipulation.",
          syntax: "filter: function(value);\nfilter: blur(5px);\nfilter: brightness(150%);\nfilter: grayscale(100%);\nfilter: contrast(200%);",
          examples: [
            {
              title: "CSS Image Filters Example",
              description: "Using image filters",
              code: `/* Blur */
.blur {
  filter: blur(5px);
}

/* Brightness */
.bright {
  filter: brightness(150%);
}

.dark {
  filter: brightness(50%);
}

/* Grayscale */
.grayscale {
  filter: grayscale(100%);
}

/* Contrast */
.high-contrast {
  filter: contrast(200%);
}

/* Multiple filters */
.multiple {
  filter: blur(2px) brightness(120%) contrast(150%);
}

/* Hover effect */
.image:hover {
  filter: grayscale(0%);
}

.image {
  filter: grayscale(100%);
  transition: filter 0.3s;
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "What property applies visual effects?",
              type: "fill",
              starterCode: `img { ___: blur(5px); }`,
              answer: "filter",
            },
            {
              question: "What filter makes image grayscale?",
              type: "fill",
              starterCode: `filter: ___(100%);`,
              answer: "grayscale",
            },
            {
              question: "What filter increases image brightness?",
              type: "fill",
              starterCode: `filter: ___(150%);`,
              answer: "brightness",
            },
          ],
        },
        {
          id: "css-image-shapes",
          title: "CSS Image Shapes",
          explanation: "CSS can create various image shapes using border-radius, clip-path, and shape-outside. Border-radius creates rounded corners and circles. Clip-path creates custom shapes like polygons, circles, and ellipses. Shape-outside makes text wrap around shapes. Image shapes create unique layouts and visual effects. They're used for modern, creative designs.",
          syntax: "border-radius: value;\nclip-path: polygon() | circle() | ellipse();\nshape-outside: circle() | polygon();",
          examples: [
            {
              title: "CSS Image Shapes Example",
              description: "Creating image shapes",
              code: `/* Circle */
.circle {
  border-radius: 50%;
  width: 200px;
  height: 200px;
}

/* Clip path - triangle */
.triangle {
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
}

/* Clip path - polygon */
.star {
  clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
}

/* Shape outside */
.text-wrap {
  float: left;
  shape-outside: circle(50%);
  clip-path: circle(50%);
}

/* Ellipse */
.ellipse {
  clip-path: ellipse(100px 50px at 50% 50%);
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "What property creates custom shapes?",
              type: "fill",
              starterCode: `img { ___-path: circle(50%); }`,
              answer: "clip",
            },
            {
              question: "What value creates a perfect circle?",
              type: "fill",
              starterCode: `border-radius: ___;`,
              answer: "50%",
            },
            {
              question: "What property makes text wrap around shapes?",
              type: "fill",
              starterCode: `shape-___: circle(50%);`,
              answer: "outside",
            },
          ],
        },
        {
          id: "object-fit",
          title: "object-fit",
          explanation: "The CSS object-fit property controls how an image or video fits within its container. Object-fit values include fill (stretches to fill), contain (fits entire content), cover (fills container, may crop), none (original size), and scale-down (smaller of contain or none). Object-fit works with fixed width and height. It's essential for responsive images and maintaining aspect ratios.",
          syntax: "object-fit: fill|contain|cover|none|scale-down;",
          examples: [
            {
              title: "object-fit Example",
              description: "Using object-fit",
              code: `/* Fill (stretch) */
.fill {
  width: 300px;
  height: 200px;
  object-fit: fill;
}

/* Contain (fit entire image) */
.contain {
  width: 300px;
  height: 200px;
  object-fit: contain;
}

/* Cover (fill, may crop) */
.cover {
  width: 300px;
  height: 200px;
  object-fit: cover;
}

/* None (original size) */
.none {
  width: 300px;
  height: 200px;
  object-fit: none;
}

/* Scale down */
.scale-down {
  width: 300px;
  height: 200px;
  object-fit: scale-down;
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "What property controls image fitting?",
              type: "fill",
              starterCode: `img { ___: cover; }`,
              answer: "object-fit",
            },
            {
              question: "What value fills container without distortion?",
              type: "fill",
              starterCode: `object-fit: ___;`,
              answer: "cover",
            },
            {
              question: "What value fits entire image without cropping?",
              type: "fill",
              starterCode: `object-fit: ___;`,
              answer: "contain",
            },
          ],
        },
        {
          id: "object-position",
          title: "object-position",
          explanation: "The CSS object-position property controls the position of an image or video within its container when using object-fit. Object-position uses similar syntax to background-position. Values can be keywords (center, top, bottom, left, right) or coordinates. Object-position works with object-fit to precisely control how content is displayed. It's useful for cropping and positioning images.",
          syntax: "object-position: x y;\nobject-position: center|top|bottom|left|right;\nobject-position: 50% 50%;",
          examples: [
            {
              title: "object-position Example",
              description: "Using object-position",
              code: `/* Center */
.center {
  object-fit: cover;
  object-position: center;
}

/* Top */
.top {
  object-fit: cover;
  object-position: top;
}

/* Bottom right */
.bottom-right {
  object-fit: cover;
  object-position: bottom right;
}

/* Coordinates */
.custom {
  object-fit: cover;
  object-position: 30% 70%;
}

/* Left */
.left {
  object-fit: cover;
  object-position: left;
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "What property positions image within container?",
              type: "fill",
              starterCode: `img { ___: center; }`,
              answer: "object-position",
            },
            {
              question: "What value centers the image?",
              type: "fill",
              starterCode: `object-position: ___;`,
              answer: "center",
            },
            {
              question: "What property works with object-position?",
              type: "fill",
              starterCode: `object-___: cover;`,
              answer: "fit",
            },
          ],
        },
        {
          id: "css-masking",
          title: "CSS Masking",
          explanation: "CSS masking hides portions of elements using mask images or gradients. The mask-image property specifies the mask. Mask-mode controls how mask is interpreted. Mask-size, mask-position, and mask-repeat work like background properties. Masking creates complex visual effects and reveals content gradually. It's used for creative designs and transitions.",
          syntax: "mask-image: url() | gradient();\nmask-mode: alpha | luminance;\nmask-size: value;\nmask-position: value;\nmask-repeat: value;",
          examples: [
            {
              title: "CSS Masking Example",
              description: "Using CSS masking",
              code: `/* Mask with image */
.masked {
  mask-image: url('mask.png');
  mask-size: cover;
  mask-position: center;
}

/* Mask with gradient */
.gradient-mask {
  mask-image: linear-gradient(to bottom, black, transparent);
}

/* Mask mode */
.alpha-mask {
  mask-image: url('mask.png');
  mask-mode: alpha;
}

/* Multiple masks */
.complex {
  mask-image: url('mask1.png'), url('mask2.png');
  mask-composite: subtract;
}

/* Mask repeat */
.repeat-mask {
  mask-image: url('pattern.png');
  mask-repeat: repeat;
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "What property specifies the mask?",
              type: "fill",
              starterCode: `div { ___: url('mask.png'); }`,
              answer: "mask-image",
            },
            {
              question: "What mask mode uses alpha channel?",
              type: "fill",
              starterCode: `mask-mode: ___;`,
              answer: "alpha",
            },
            {
              question: "What can be used as a mask?",
              type: "predict",
              starterCode: `Images or gradients`,
              answer: "Images or gradients",
            },
          ],
        },
        {
          id: "css-buttons",
          title: "CSS Buttons",
          explanation: "CSS buttons are styled interactive elements for user actions. Buttons can have various styles including colors, borders, shadows, hover effects, and active states. Common button styles include flat, raised, outlined, and text buttons. Buttons enhance user interface and provide clear call-to-action elements. Responsive buttons adapt to different screen sizes.",
          syntax: "button { padding, background-color, border, border-radius, cursor }\nbutton:hover { }\nbutton:active { }",
          examples: [
            {
              title: "CSS Buttons Example",
              description: "Styling buttons",
              code: `/* Basic button */
.button {
  background-color: #4CAF50;
  color: white;
  padding: 12px 24px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

.button:hover {
  background-color: #45a049;
}

.button:active {
  background-color: #3d8b40;
}

/* Outlined button */
.outlined {
  background-color: transparent;
  border: 2px solid #4CAF50;
  color: #4CAF50;
}

/* Text button */
.text-btn {
  background-color: transparent;
  border: none;
  color: #4CAF50;
  text-decoration: underline;
}

/* Raised button */
.raised {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.raised:hover {
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "What property changes cursor on hover?",
              type: "fill",
              starterCode: `button { ___: pointer; }`,
              answer: "cursor",
            },
            {
              question: "What pseudo-class styles clicked button?",
              type: "fill",
              starterCode: `button:___ { background-color: darkblue; }`,
              answer: "active",
            },
            {
              question: "What creates raised button effect?",
              type: "predict",
              starterCode: `box-shadow property`,
              answer: "box-shadow",
            },
          ],
        },
        {
          id: "css-pagination",
          title: "CSS Pagination",
          explanation: "CSS pagination creates navigation for multiple pages of content. Pagination typically displays page numbers, previous/next buttons, and current page indicators. Pagination uses lists styled with CSS. Active page states are highlighted. Hover effects enhance interactivity. Pagination helps users navigate through large amounts of content efficiently.",
          syntax: ".pagination { display: flex; }\n.pagination a { padding, margin, border }\n.pagination .active { background-color, color }",
          examples: [
            {
              title: "CSS Pagination Example",
              description: "Creating pagination",
              code: `/* Pagination container */
.pagination {
  display: flex;
  list-style: none;
  padding: 0;
}

/* Page links */
.pagination a {
  color: black;
  padding: 8px 16px;
  text-decoration: none;
  border: 1px solid #ddd;
  margin: 0 4px;
}

/* Hover effect */
.pagination a:hover {
  background-color: #ddd;
}

/* Active page */
.pagination .active {
  background-color: #4CAF50;
  color: white;
  border-color: #4CAF50;
}

/* Disabled */
.pagination .disabled {
  color: #ccc;
  cursor: not-allowed;
  pointer-events: none;
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "What display value creates horizontal pagination?",
              type: "fill",
              starterCode: `.pagination { display: ___; }`,
              answer: "flex",
            },
            {
              question: "What class styles the current page?",
              type: "fill",
              starterCode: `.pagination .___ { background-color: blue; }`,
              answer: "active",
            },
            {
              question: "What property prevents disabled link clicks?",
              type: "fill",
              starterCode: `pointer-___: none;`,
              answer: "events",
            },
          ],
        },
        {
          id: "css-multiple-columns",
          title: "CSS Multiple Columns",
          explanation: "CSS multiple columns create newspaper-like layouts with text flowing across multiple columns. The column-count property sets number of columns. Column-width sets column width. Column-gap sets space between columns. Column-rule adds lines between columns. Column-span allows elements to span all columns. Multiple columns improve readability for long text content.",
          syntax: "column-count: number;\ncolumn-width: value;\ncolumn-gap: value;\ncolumn-rule: width style color;\ncolumns: count width;",
          examples: [
            {
              title: "CSS Multiple Columns Example",
              description: "Creating multiple columns",
              code: `/* Column count */
.three-columns {
  column-count: 3;
}

/* Column width */
.auto-columns {
  column-width: 200px;
}

/* Column gap */
.spaced-columns {
  column-count: 3;
  column-gap: 30px;
}

/* Column rule */
.ruled-columns {
  column-count: 3;
  column-rule: 2px solid #ccc;
}

/* Span all columns */
.heading {
  column-span: all;
}

/* Shorthand */
.columns {
  columns: 3 200px;
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "What property sets number of columns?",
              type: "fill",
              starterCode: `div { ___: 3; }`,
              answer: "column-count",
            },
            {
              question: "What property sets space between columns?",
              type: "fill",
              starterCode: `column-___: 30px;`,
              answer: "gap",
            },
            {
              question: "What value makes element span all columns?",
              type: "fill",
              starterCode: `column-___: all;`,
              answer: "span",
            },
          ],
        },
        {
          id: "css-user-interface",
          title: "CSS User Interface",
          explanation: "CSS user interface properties control the appearance and behavior of UI elements. Properties include cursor (mouse cursor), outline (focus outline), resize (element resizing), user-select (text selection), and appearance (browser default styling). UI properties enhance user interaction and accessibility. They help create intuitive and accessible interfaces.",
          syntax: "cursor: pointer|default|move|not-allowed;\noutline: width style color;\nresize: none|both|horizontal|vertical;\nuser-select: none|auto|text|all;\nappearance: none|auto;",
          examples: [
            {
              title: "CSS User Interface Example",
              description: "Using UI properties",
              code: `/* Cursor */
.button {
  cursor: pointer;
}

.draggable {
  cursor: move;
}

.disabled {
  cursor: not-allowed;
}

/* Resize */
.resizable {
  resize: both;
  overflow: auto;
}

/* User select */
.no-select {
  user-select: none;
}

.select-all {
  user-select: all;
}

/* Appearance */
.custom-input {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
}

/* Outline */
.focus-outline:focus {
  outline: 2px solid blue;
  outline-offset: 2px;
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "What cursor value indicates clickable?",
              type: "fill",
              starterCode: `cursor: ___;`,
              answer: "pointer",
            },
            {
              question: "What property prevents text selection?",
              type: "fill",
              starterCode: `user-___: none;`,
              answer: "select",
            },
            {
              question: "What property allows element resizing?",
              type: "fill",
              starterCode: `___: both;`,
              answer: "resize",
            },
          ],
        },
        {
          id: "css-variables",
          title: "CSS Variables",
          explanation: "CSS custom properties (variables) allow storing values for reuse throughout stylesheets. Variables are defined using --name: value syntax. They're accessed using var(--name). Variables can be scoped to elements or defined globally in :root. Variables enable theming, maintainability, and dynamic styling. They can be changed with JavaScript for dynamic themes.",
          syntax: ":root { --variable-name: value; }\nelement { property: var(--variable-name); }\nvar(--variable-name, fallback)",
          examples: [
            {
              title: "CSS Variables Example",
              description: "Using CSS variables",
              code: `/* Define variables */
:root {
  --primary-color: #4CAF50;
  --secondary-color: #2196F3;
  --spacing: 10px;
  --font-size: 16px;
}

/* Use variables */
.button {
  background-color: var(--primary-color);
  padding: var(--spacing);
  font-size: var(--font-size);
}

/* Fallback value */
.text {
  color: var(--text-color, black);
}

/* Scoped variables */
.card {
  --card-padding: 20px;
  padding: var(--card-padding);
}

/* Change with JavaScript */
/* document.documentElement.style.setProperty('--primary-color', 'red'); */`,
            },
          ],
          practiceQuestions: [
            {
              question: "What syntax defines CSS variables?",
              type: "fill",
              starterCode: `:root { --color: blue; }`,
              answer: "--variable-name: value",
            },
            {
              question: "What function accesses CSS variables?",
              type: "fill",
              starterCode: `color: ___(--color);`,
              answer: "var",
            },
            {
              question: "Where are global variables typically defined?",
              type: "fill",
              starterCode: `___ { --color: blue; }`,
              answer: ":root",
            },
          ],
        },
        {
          id: "css-property",
          title: "CSS @property",
          explanation: "The CSS @property rule defines custom properties with types, initial values, and inheritance. @property provides type checking and enables animations of custom properties. It allows defining whether properties inherit and their syntax. @property is useful for creating animatable custom properties and type-safe CSS variables. It's a newer CSS feature that enhances custom properties.",
          syntax: "@property --name {\n  syntax: '<type>';\n  inherits: true|false;\n  initial-value: value;\n}",
          examples: [
            {
              title: "CSS @property Example",
              description: "Using @property",
              code: `/* Define typed property */
@property --primary-color {
  syntax: '<color>';
  inherits: false;
  initial-value: #4CAF50;
}

/* Use property */
.element {
  --primary-color: blue;
  background-color: var(--primary-color);
}

/* Animatable property */
@property --angle {
  syntax: '<angle>';
  inherits: false;
  initial-value: 0deg;
}

.rotating {
  --angle: 180deg;
  transform: rotate(var(--angle));
  transition: --angle 1s;
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "What rule defines typed custom properties?",
              type: "fill",
              starterCode: `@___ --color { syntax: '<color>'; }`,
              answer: "property",
            },
            {
              question: "What field specifies property type?",
              type: "fill",
              starterCode: `syntax: '<___>';`,
              answer: "color",
            },
            {
              question: "What does @property enable for custom properties?",
              type: "predict",
              starterCode: `Type checking and animations`,
              answer: "Type checking and animations",
            },
          ],
        },
        {
          id: "css-box-sizing",
          title: "CSS Box Sizing",
          explanation: "The CSS box-sizing property controls how element width and height are calculated. Content-box (default) includes only content in width/height. Border-box includes padding and border in width/height. Border-box makes sizing more predictable and easier to work with. It's commonly set globally for all elements. Border-box prevents width overflow issues.",
          syntax: "box-sizing: content-box|border-box;",
          examples: [
            {
              title: "CSS Box Sizing Example",
              description: "Using box-sizing",
              code: `/* Content-box (default) */
.content-box {
  box-sizing: content-box;
  width: 300px;
  padding: 20px;
  border: 5px solid;
  /* Total width = 300 + 40 + 10 = 350px */
}

/* Border-box */
.border-box {
  box-sizing: border-box;
  width: 300px;
  padding: 20px;
  border: 5px solid;
  /* Total width = 300px (includes padding and border) */
}

/* Global border-box */
* {
  box-sizing: border-box;
}

/* Specific element */
.flex-item {
  box-sizing: border-box;
  width: 33.333%;
  padding: 10px;
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "What box-sizing value includes padding and border?",
              type: "fill",
              starterCode: `box-sizing: ___-box;`,
              answer: "border",
            },
            {
              question: "What is the default box-sizing value?",
              type: "fill",
              starterCode: `box-sizing: ___-box;`,
              answer: "content",
            },
            {
              question: "What box-sizing prevents width overflow?",
              type: "predict",
              starterCode: `border-box includes padding and border`,
              answer: "border-box",
            },
          ],
        },
        {
          id: "css-media-queries",
          title: "CSS Media Queries",
          explanation: "CSS media queries apply styles based on device characteristics like screen size, resolution, and orientation. Media queries enable responsive design. Common breakpoints target mobile, tablet, and desktop screens. Media queries use @media rule with conditions. They're essential for creating websites that work on all devices. Understanding media queries is fundamental to responsive web design.",
          syntax: "@media (condition) { styles }\n@media (max-width: 768px) { }\n@media (min-width: 1024px) { }",
          examples: [
            {
              title: "CSS Media Queries Example",
              description: "Using media queries",
              code: `/* Mobile */
@media (max-width: 768px) {
  .container {
    width: 100%;
    padding: 10px;
  }
}

/* Tablet */
@media (min-width: 769px) and (max-width: 1024px) {
  .container {
    width: 750px;
  }
}

/* Desktop */
@media (min-width: 1025px) {
  .container {
    width: 1200px;
  }
}

/* Orientation */
@media (orientation: landscape) {
  .sidebar {
    width: 300px;
  }
}

/* Print */
@media print {
  .no-print {
    display: none;
  }
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "What rule applies styles based on conditions?",
              type: "fill",
              starterCode: `@___ (max-width: 768px) { }`,
              answer: "media",
            },
            {
              question: "What condition targets mobile screens?",
              type: "fill",
              starterCode: `@media (max-width: ___) { }`,
              answer: "768px",
            },
            {
              question: "What enables responsive design?",
              type: "predict",
              starterCode: `Media queries`,
              answer: "Media queries",
            },
          ],
        },
        {
          id: "css-mq-examples",
          title: "CSS MQ Examples",
          explanation: "CSS media query examples demonstrate common responsive design patterns. Examples include mobile-first approach, tablet breakpoints, desktop layouts, print styles, and device-specific optimizations. Media query examples show practical implementations for different screen sizes and devices. They help understand how to structure responsive CSS effectively.",
          syntax: "Common breakpoints:\nMobile: max-width: 768px\nTablet: 769px - 1024px\nDesktop: min-width: 1025px",
          examples: [
            {
              title: "CSS Media Query Examples",
              description: "Common media query patterns",
              code: `/* Mobile-first approach */
.container {
  width: 100%;
  padding: 10px;
}

/* Tablet */
@media (min-width: 768px) {
  .container {
    width: 750px;
    padding: 20px;
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .container {
    width: 1200px;
    padding: 30px;
  }
}

/* Large desktop */
@media (min-width: 1440px) {
  .container {
    width: 1400px;
  }
}

/* High DPI screens */
@media (min-resolution: 192dpi) {
  .logo {
    background-image: url('logo@2x.png');
  }
}

/* Dark mode */
@media (prefers-color-scheme: dark) {
  body {
    background-color: #1a1a1a;
    color: white;
  }
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "What approach starts with mobile styles?",
              type: "fill",
              starterCode: `___-first approach`,
              answer: "mobile",
            },
            {
              question: "What media query targets dark mode?",
              type: "fill",
              starterCode: `@media (prefers-color-scheme: ___) { }`,
              answer: "dark",
            },
            {
              question: "What breakpoint is common for tablets?",
              type: "predict",
              starterCode: `768px to 1024px`,
              answer: "768px to 1024px",
            },
          ],
        },
      ],
    },
    {
      id: "flexbox",
      title: "CSS Flexbox",
      topics: [
        {
          id: "flexbox-intro",
          title: "Flexbox Intro",
          explanation: "CSS Flexbox is a one-dimensional layout method for arranging items in rows or columns. Flexbox makes it easy to align items, distribute space, and create responsive layouts. Flexbox consists of a flex container (parent) and flex items (children). The container uses display: flex or display: inline-flex. Flexbox solves common layout problems like centering, equal heights, and flexible spacing. It's widely supported and essential for modern CSS layouts.",
          syntax: "display: flex;\ndisplay: inline-flex;\n\nContainer properties: flex-direction, flex-wrap, justify-content, align-items\nItem properties: flex-grow, flex-shrink, flex-basis",
          examples: [
            {
              title: "Flexbox Intro Example",
              description: "Basic flexbox layout",
              code: `/* Flex container */
.container {
  display: flex;
  background-color: #f0f0f0;
  padding: 10px;
}

/* Flex items */
.item {
  background-color: #4CAF50;
  color: white;
  padding: 20px;
  margin: 5px;
  flex: 1;
}

/* Horizontal layout */
.horizontal {
  display: flex;
  flex-direction: row;
}

/* Vertical layout */
.vertical {
  display: flex;
  flex-direction: column;
}

/* Centered items */
.centered {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "What display value creates a flex container?",
              type: "fill",
              starterCode: `.container { display: ___; }`,
              answer: "flex",
            },
            {
              question: "What is Flexbox used for?",
              type: "predict",
              starterCode: `One-dimensional layout`,
              answer: "One-dimensional layouts (rows or columns)",
            },
            {
              question: "What are the two main components of Flexbox?",
              type: "predict",
              starterCode: `Container and items`,
              answer: "Flex container (parent) and flex items (children)",
            },
          ],
        },
        {
          id: "flex-container",
          title: "Flex Container",
          explanation: "Flex container properties control how flex items are laid out. Flex-direction sets the main axis (row, column, row-reverse, column-reverse). Flex-wrap controls wrapping (nowrap, wrap, wrap-reverse). Justify-content aligns items along the main axis (flex-start, center, flex-end, space-between, space-around, space-evenly). Align-items aligns items along the cross axis (stretch, flex-start, center, flex-end, baseline). Align-content aligns wrapped lines. Understanding container properties is essential for Flexbox layouts.",
          syntax: "flex-direction: row|column|row-reverse|column-reverse;\nflex-wrap: nowrap|wrap|wrap-reverse;\njustify-content: flex-start|center|flex-end|space-between|space-around|space-evenly;\nalign-items: stretch|flex-start|center|flex-end|baseline;\nalign-content: flex-start|center|flex-end|space-between|space-around|stretch;",
          examples: [
            {
              title: "Flex Container Example",
              description: "Using flex container properties",
              code: `/* Flex direction */
.container {
  display: flex;
  flex-direction: row; /* Horizontal */
}

.vertical {
  flex-direction: column; /* Vertical */
}

/* Flex wrap */
.wrap {
  flex-wrap: wrap;
}

/* Justify content */
.space-between {
  justify-content: space-between;
}

.center {
  justify-content: center;
}

/* Align items */
.align-center {
  align-items: center;
}

.align-stretch {
  align-items: stretch;
}

/* Combined */
.complete {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "What property sets flex direction?",
              type: "fill",
              starterCode: `flex-___: column;`,
              answer: "direction",
            },
            {
              question: "What property aligns items along main axis?",
              type: "fill",
              starterCode: `justify-___: center;`,
              answer: "content",
            },
            {
              question: "What value distributes space evenly?",
              type: "fill",
              starterCode: `justify-content: space-___;`,
              answer: "evenly",
            },
          ],
        },
        {
          id: "flex-items",
          title: "Flex Items",
          explanation: "Flex item properties control how individual flex items behave. Flex-grow determines how items grow to fill space. Flex-shrink determines how items shrink. Flex-basis sets initial size. Flex is shorthand for grow, shrink, and basis. Align-self overrides container's align-items for specific item. Order controls visual order. Flex items can have different sizes and behaviors within the same container.",
          syntax: "flex-grow: number;\nflex-shrink: number;\nflex-basis: value;\nflex: grow shrink basis;\nalign-self: auto|flex-start|center|flex-end|stretch|baseline;\norder: number;",
          examples: [
            {
              title: "Flex Items Example",
              description: "Using flex item properties",
              code: `/* Flex grow */
.item1 {
  flex-grow: 1;
}

.item2 {
  flex-grow: 2; /* Takes twice the space */
}

/* Flex shrink */
.shrink {
  flex-shrink: 0; /* Don't shrink */
}

/* Flex basis */
.basis {
  flex-basis: 200px;
}

/* Flex shorthand */
.flex-item {
  flex: 1 1 200px; /* grow shrink basis */
}

/* Align self */
.align-right {
  align-self: flex-end;
}

/* Order */
.first {
  order: -1; /* Appears first */
}

.last {
  order: 1; /* Appears last */
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "What property controls item growth?",
              type: "fill",
              starterCode: `flex-___: 1;`,
              answer: "grow",
            },
            {
              question: "What property sets initial item size?",
              type: "fill",
              starterCode: `flex-___: 200px;`,
              answer: "basis",
            },
            {
              question: "What property overrides container alignment?",
              type: "fill",
              starterCode: `align-___: flex-end;`,
              answer: "self",
            },
          ],
        },
        {
          id: "flex-responsive",
          title: "Flex Responsive",
          explanation: "Flexbox is inherently responsive and adapts to different screen sizes. Responsive flexbox uses media queries to change flex-direction, flex-wrap, and item properties at different breakpoints. Common patterns include switching from row to column on mobile, adjusting item sizes, and changing alignment. Flexbox combined with media queries creates flexible, adaptive layouts that work on all devices.",
          syntax: "@media (max-width: 768px) {\n  .container { flex-direction: column; }\n}\n\nResponsive: flex-wrap, flex-direction, flex-grow",
          examples: [
            {
              title: "Flex Responsive Example",
              description: "Creating responsive flexbox layouts",
              code: `/* Desktop - horizontal */
.container {
  display: flex;
  flex-direction: row;
  gap: 20px;
}

/* Mobile - vertical */
@media (max-width: 768px) {
  .container {
    flex-direction: column;
    gap: 10px;
  }
}

/* Responsive items */
.item {
  flex: 1 1 300px; /* Grow, shrink, min-width */
}

@media (max-width: 768px) {
  .item {
    flex: 1 1 100%; /* Full width on mobile */
  }
}

/* Responsive wrap */
.wrap-container {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
}

.wrap-container .item {
  flex: 1 1 calc(33.333% - 15px);
}

@media (max-width: 768px) {
  .wrap-container .item {
    flex: 1 1 100%;
  }
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "What flex-direction is common for mobile?",
              type: "fill",
              starterCode: `@media (max-width: 768px) { flex-direction: ___; }`,
              answer: "column",
            },
            {
              question: "What makes Flexbox responsive?",
              type: "predict",
              starterCode: `Flexible sizing and wrapping`,
              answer: "Flexible sizing, wrapping, and media queries",
            },
            {
              question: "What property enables responsive wrapping?",
              type: "fill",
              starterCode: `flex-___: wrap;`,
              answer: "wrap",
            },
          ],
        },
      ],
    },
    {
      id: "grid",
      title: "CSS Grid",
      topics: [
        {
          id: "grid-intro",
          title: "Grid Intro",
          explanation: "CSS Grid is a two-dimensional layout system for creating complex web layouts. Grid allows you to arrange items in rows and columns simultaneously. Grid consists of a grid container (parent) and grid items (children). The container uses display: grid or display: inline-grid. Grid provides precise control over layout with grid lines, tracks, cells, and areas. It's the most powerful CSS layout system and works alongside Flexbox for complete layout control.",
          syntax: "display: grid;\ndisplay: inline-grid;\n\nContainer: grid-template-columns, grid-template-rows, grid-template-areas\nItems: grid-column, grid-row, grid-area",
          examples: [
            {
              title: "Grid Intro Example",
              description: "Basic CSS Grid layout",
              code: `/* Grid container */
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}

/* Grid items */
.item {
  background-color: #4CAF50;
  color: white;
  padding: 20px;
  text-align: center;
}

/* Simple grid */
.grid {
  display: grid;
  grid-template-columns: 200px 200px 200px;
  grid-template-rows: 100px 100px;
  gap: 15px;
}

/* Fractional units */
.fractional {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  gap: 20px;
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "What display value creates a grid container?",
              type: "fill",
              starterCode: `.container { display: ___; }`,
              answer: "grid",
            },
            {
              question: "What type of layout system is CSS Grid?",
              type: "predict",
              starterCode: `Two-dimensional layout`,
              answer: "Two-dimensional layout system",
            },
            {
              question: "What unit represents available space in grid?",
              type: "fill",
              starterCode: `grid-template-columns: 1___ 2___;`,
              answer: "fr",
            },
          ],
        },
        {
          id: "grid-container",
          title: "Grid Container",
          explanation: "Grid container properties define the grid structure. Grid-template-columns defines column tracks. Grid-template-rows defines row tracks. Grid-template-areas names grid areas. Gap (or grid-gap) sets spacing between items. Justify-items aligns items horizontally. Align-items aligns items vertically. Place-items is shorthand for both. Grid container properties create the foundation for grid layouts.",
          syntax: "grid-template-columns: track-list;\ngrid-template-rows: track-list;\ngrid-template-areas: area-names;\ngap: row-gap column-gap;\njustify-items: start|center|end|stretch;\nalign-items: start|center|end|stretch;\nplace-items: align justify;",
          examples: [
            {
              title: "Grid Container Example",
              description: "Using grid container properties",
              code: `/* Grid columns */
.container {
  display: grid;
  grid-template-columns: 200px 200px 200px;
  gap: 20px;
}

/* Repeat function */
.repeat {
  grid-template-columns: repeat(3, 1fr);
}

/* Auto-fit */
.auto-fit {
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}

/* Grid areas */
.areas {
  grid-template-areas:
    "header header header"
    "sidebar main main"
    "footer footer footer";
  grid-template-columns: 1fr 2fr 2fr;
  grid-template-rows: auto 1fr auto;
}

/* Gap */
.spaced {
  gap: 20px 30px; /* row column */
}

/* Align items */
.aligned {
  justify-items: center;
  align-items: center;
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "What property defines column tracks?",
              type: "fill",
              starterCode: `grid-template-___: repeat(3, 1fr);`,
              answer: "columns",
            },
            {
              question: "What function repeats grid tracks?",
              type: "fill",
              starterCode: `grid-template-columns: ___(3, 1fr);`,
              answer: "repeat",
            },
            {
              question: "What property sets spacing between items?",
              type: "fill",
              starterCode: `___: 20px;`,
              answer: "gap",
            },
          ],
        },
        {
          id: "grid-items",
          title: "Grid Items",
          explanation: "Grid item properties control how items are placed in the grid. Grid-column specifies which columns an item spans. Grid-row specifies which rows an item spans. Grid-area specifies both or references a named area. Justify-self aligns item horizontally. Align-self aligns item vertically. Place-self is shorthand for both. Grid items can span multiple cells and be positioned precisely.",
          syntax: "grid-column: start / end;\ngrid-row: start / end;\ngrid-area: name | row-start / col-start / row-end / col-end;\njustify-self: start|center|end|stretch;\nalign-self: start|center|end|stretch;\nplace-self: align justify;",
          examples: [
            {
              title: "Grid Items Example",
              description: "Using grid item properties",
              code: `/* Grid column */
.item1 {
  grid-column: 1 / 3; /* Spans columns 1 to 3 */
}

/* Grid row */
.item2 {
  grid-row: 2 / 4; /* Spans rows 2 to 4 */
}

/* Grid area */
.item3 {
  grid-area: 1 / 1 / 3 / 3; /* row-start / col-start / row-end / col-end */
}

/* Named area */
.header {
  grid-area: header;
}

/* Span keyword */
.span-two {
  grid-column: span 2;
}

/* Self alignment */
.self-center {
  justify-self: center;
  align-self: center;
}

/* Place self */
.centered {
  place-self: center;
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "What property specifies column span?",
              type: "fill",
              starterCode: `grid-___: 1 / 3;`,
              answer: "column",
            },
            {
              question: "What keyword spans multiple cells?",
              type: "fill",
              starterCode: `grid-column: ___ 2;`,
              answer: "span",
            },
            {
              question: "What property references named grid area?",
              type: "fill",
              starterCode: `grid-___: header;`,
              answer: "area",
            },
          ],
        },
        {
          id: "grid-12-column-layout",
          title: "Grid 12-column Layout",
          explanation: "CSS Grid 12-column layout is a common design pattern based on 12-column grids used in frameworks like Bootstrap. Items span 1-12 columns. A 12-column grid provides flexibility for various layouts (full width, half, third, quarter, etc.). Grid-template-columns: repeat(12, 1fr) creates 12 equal columns. Items use grid-column: span X to span columns. This pattern is widely used in web design.",
          syntax: "grid-template-columns: repeat(12, 1fr);\ngrid-column: span 12; /* full width */\ngrid-column: span 6; /* half width */\ngrid-column: span 4; /* third width */\ngrid-column: span 3; /* quarter width */",
          examples: [
            {
              title: "Grid 12-column Layout Example",
              description: "Creating 12-column grid layout",
              code: `/* 12-column grid */
.container {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 20px;
}

/* Full width */
.full {
  grid-column: span 12;
}

/* Half width */
.half {
  grid-column: span 6;
}

/* Third width */
.third {
  grid-column: span 4;
}

/* Quarter width */
.quarter {
  grid-column: span 3;
}

/* Two-thirds */
.two-thirds {
  grid-column: span 8;
}

/* Responsive 12-column */
@media (max-width: 768px) {
  .half {
    grid-column: span 12; /* Full width on mobile */
  }
  
  .third {
    grid-column: span 12;
  }
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "How many columns in a 12-column grid?",
              type: "fill",
              starterCode: `grid-template-columns: repeat(___, 1fr);`,
              answer: "12",
            },
            {
              question: "What span creates half width?",
              type: "fill",
              starterCode: `grid-column: span ___;`,
              answer: "6",
            },
            {
              question: "What span creates full width?",
              type: "fill",
              starterCode: `grid-column: span ___;`,
              answer: "12",
            },
          ],
        },
        {
          id: "css-supports",
          title: "CSS @supports",
          explanation: "The CSS @supports rule (feature query) applies styles only if the browser supports a specific CSS feature. @supports allows progressive enhancement and graceful degradation. It checks for property support before applying styles. @supports is useful for using modern CSS features while providing fallbacks. It helps create cross-browser compatible stylesheets.",
          syntax: "@supports (property: value) { styles }\n@supports not (property: value) { styles }\n@supports (property1: value1) and (property2: value2) { styles }",
          examples: [
            {
              title: "CSS @supports Example",
              description: "Using @supports for feature detection",
              code: `/* Basic support check */
@supports (display: grid) {
  .container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
}

/* Not supported */
@supports not (display: grid) {
  .container {
    display: flex;
  }
}

/* Multiple conditions */
@supports (display: grid) and (gap: 20px) {
  .grid {
    display: grid;
    gap: 20px;
  }
}

/* Or condition */
@supports (display: flex) or (display: -webkit-flex) {
  .flex {
    display: flex;
  }
}

/* Complex query */
@supports (display: grid) and (not (display: -ms-grid)) {
  .modern-grid {
    display: grid;
  }
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "What rule checks CSS feature support?",
              type: "fill",
              starterCode: `@___ (display: grid) { }`,
              answer: "supports",
            },
            {
              question: "What keyword checks for lack of support?",
              type: "fill",
              starterCode: `@supports ___ (display: grid) { }`,
              answer: "not",
            },
            {
              question: "What keyword combines multiple conditions?",
              type: "fill",
              starterCode: `@supports (a: 1) ___ (b: 2) { }`,
              answer: "and",
            },
          ],
        },
      ],
    },
    {
      id: "responsive",
      title: "CSS Responsive",
      topics: [
        {
          id: "rwd-intro",
          title: "RWD Intro",
          explanation: "Responsive Web Design (RWD) creates websites that adapt to different screen sizes and devices. RWD uses flexible layouts, flexible images, and media queries. Websites should work on mobile phones, tablets, and desktops. Responsive design improves user experience and accessibility. It's essential for modern web development. RWD principles include fluid grids, flexible images, and media queries.",
          syntax: "Responsive design uses:\n- Fluid grids (percentages, fr units)\n- Flexible images (max-width: 100%)\n- Media queries (@media)\n- Viewport meta tag",
          examples: [
            {
              title: "RWD Intro Example",
              description: "Basic responsive design setup",
              code: `/* Viewport meta tag */
<meta name="viewport" content="width=device-width, initial-scale=1.0">

/* Fluid container */
.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

/* Responsive images */
img {
  max-width: 100%;
  height: auto;
}

/* Media queries */
@media (max-width: 768px) {
  .container {
    padding: 10px;
  }
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "What does RWD stand for?",
              type: "fill",
              starterCode: `RWD = Responsive Web ___`,
              answer: "Design",
            },
            {
              question: "What are the three main RWD principles?",
              type: "predict",
              starterCode: `Fluid grids, flexible images, media queries`,
              answer: "Fluid grids, flexible images, and media queries",
            },
            {
              question: "What property makes images responsive?",
              type: "fill",
              starterCode: `img { ___: 100%; height: auto; }`,
              answer: "max-width",
            },
          ],
        },
        {
          id: "rwd-viewport",
          title: "RWD Viewport",
          explanation: "The viewport is the visible area of a web page. The viewport meta tag controls how pages are displayed on mobile devices. Width=device-width sets viewport width to device width. Initial-scale=1.0 sets initial zoom level. Viewport settings prevent mobile browsers from rendering pages at desktop width. Proper viewport configuration is essential for responsive design.",
          syntax: "<meta name='viewport' content='width=device-width, initial-scale=1.0'>\n\nOther options: maximum-scale, minimum-scale, user-scalable",
          examples: [
            {
              title: "RWD Viewport Example",
              description: "Setting viewport meta tag",
              code: `<!-- Standard viewport -->
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<!-- Prevent zooming -->
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">

<!-- Allow zooming -->
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0">

<!-- Fixed width (not recommended) -->
<meta name="viewport" content="width=800">

/* CSS viewport units */
.full-width {
  width: 100vw; /* Viewport width */
}

.full-height {
  height: 100vh; /* Viewport height */
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "What meta tag controls viewport?",
              type: "fill",
              starterCode: `<meta name="___" content="width=device-width">`,
              answer: "viewport",
            },
            {
              question: "What value sets viewport to device width?",
              type: "fill",
              starterCode: `width=___-width`,
              answer: "device",
            },
            {
              question: "What unit represents viewport width?",
              type: "fill",
              starterCode: `width: 100___;`,
              answer: "vw",
            },
          ],
        },
        {
          id: "rwd-grid-view",
          title: "RWD Grid View",
          explanation: "Responsive grid views create flexible layouts that adapt to screen sizes. Grids use percentages or fractional units instead of fixed pixels. Common grid systems include 12-column and 16-column layouts. Grid items stack vertically on mobile and display horizontally on larger screens. Responsive grids use media queries to change column spans at different breakpoints. Grid views provide consistent layouts across devices.",
          syntax: "Grid: width: percentage;\nColumns: width: calc(100% / columns);\nResponsive: @media (max-width: 768px) { width: 100%; }",
          examples: [
            {
              title: "RWD Grid View Example",
              description: "Creating responsive grid",
              code: `/* 12-column grid */
* {
  box-sizing: border-box;
}

.row::after {
  content: "";
  clear: both;
  display: table;
}

[class*="col-"] {
  float: left;
  padding: 15px;
}

.col-1 { width: 8.33%; }
.col-2 { width: 16.66%; }
.col-3 { width: 25%; }
.col-4 { width: 33.33%; }
.col-6 { width: 50%; }
.col-12 { width: 100%; }

/* Responsive */
@media only screen and (max-width: 768px) {
  [class*="col-"] {
    width: 100%;
  }
}

/* Modern CSS Grid */
.grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 20px;
}

@media (max-width: 768px) {
  .grid {
    grid-template-columns: 1fr;
  }
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "What width creates 3-column layout?",
              type: "fill",
              starterCode: `.col-3 { width: ___; }`,
              answer: "25%",
            },
            {
              question: "What width creates full-width on mobile?",
              type: "fill",
              starterCode: `@media (max-width: 768px) { width: ___; }`,
              answer: "100%",
            },
            {
              question: "What property clears floats?",
              type: "fill",
              starterCode: `clear: ___;`,
              answer: "both",
            },
          ],
        },
        {
          id: "rwd-media-queries",
          title: "RWD Media Queries",
          explanation: "Media queries are the foundation of responsive design. They apply styles based on device characteristics like width, height, orientation, and resolution. Common breakpoints target mobile (max-width: 768px), tablet (769px-1024px), and desktop (min-width: 1025px). Media queries enable different layouts for different devices. Understanding media queries is essential for responsive web design.",
          syntax: "@media (max-width: 768px) { }\n@media (min-width: 1024px) { }\n@media (orientation: landscape) { }\n@media (min-width: 768px) and (max-width: 1024px) { }",
          examples: [
            {
              title: "RWD Media Queries Example",
              description: "Using media queries for responsive design",
              code: `/* Mobile first approach */
.container {
  width: 100%;
  padding: 10px;
}

/* Tablet */
@media (min-width: 768px) {
  .container {
    width: 750px;
    padding: 20px;
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .container {
    width: 1200px;
    padding: 30px;
  }
}

/* Orientation */
@media (orientation: landscape) {
  .sidebar {
    width: 300px;
  }
}

/* Combined */
@media (min-width: 768px) and (max-width: 1024px) {
  .content {
    width: 50%;
  }
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "What breakpoint is common for mobile?",
              type: "fill",
              starterCode: `@media (max-width: ___) { }`,
              answer: "768px",
            },
            {
              question: "What approach starts with mobile styles?",
              type: "fill",
              starterCode: `___-first approach`,
              answer: "mobile",
            },
            {
              question: "What media query checks orientation?",
              type: "fill",
              starterCode: `@media (orientation: ___) { }`,
              answer: "landscape",
            },
          ],
        },
        {
          id: "rwd-images",
          title: "RWD Images",
          explanation: "Responsive images adapt to different screen sizes and resolutions. Techniques include max-width: 100% for flexible sizing, srcset for different resolutions, sizes attribute for responsive images, and picture element for art direction. Responsive images improve performance and user experience. They prevent images from being too large on mobile or too small on desktop.",
          syntax: "img { max-width: 100%; height: auto; }\n<img srcset='small.jpg 480w, large.jpg 800w' sizes='(max-width: 600px) 480px, 800px'>\n<picture> with <source> elements",
          examples: [
            {
              title: "RWD Images Example",
              description: "Creating responsive images",
              code: `/* Basic responsive */
img {
  max-width: 100%;
  height: auto;
}

/* Responsive image with srcset */
<img src="image.jpg"
     srcset="image-small.jpg 480w,
             image-medium.jpg 800w,
             image-large.jpg 1200w"
     sizes="(max-width: 600px) 480px,
            (max-width: 1200px) 800px,
            1200px"
     alt="Responsive image">

/* Picture element */
<picture>
  <source media="(min-width: 1024px)" srcset="large.jpg">
  <source media="(min-width: 768px)" srcset="medium.jpg">
  <img src="small.jpg" alt="Responsive image">
</picture>

/* Background image */
.responsive-bg {
  background-image: url('image.jpg');
  background-size: cover;
  background-position: center;
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "What property makes images responsive?",
              type: "fill",
              starterCode: `img { ___: 100%; height: auto; }`,
              answer: "max-width",
            },
            {
              question: "What attribute provides multiple image sources?",
              type: "fill",
              starterCode: `<img ___="small.jpg 480w, large.jpg 800w">`,
              answer: "srcset",
            },
            {
              question: "What element provides art direction?",
              type: "fill",
              starterCode: `<___><source><img></___>`,
              answer: "picture",
            },
          ],
        },
        {
          id: "rwd-videos",
          title: "RWD Videos",
          explanation: "Responsive videos adapt to container width while maintaining aspect ratio. Videos use max-width: 100% and height: auto for flexible sizing. Aspect ratio can be maintained using padding-bottom technique. Videos can be wrapped in responsive containers. Responsive videos ensure proper display on all devices. They prevent videos from overflowing containers or being too small.",
          syntax: "video { max-width: 100%; height: auto; }\n\nAspect ratio: padding-bottom: 56.25%; /* 16:9 */",
          examples: [
            {
              title: "RWD Videos Example",
              description: "Creating responsive videos",
              code: `/* Basic responsive video */
video {
  max-width: 100%;
  height: auto;
}

/* Responsive video container */
.video-container {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
  height: 0;
  overflow: hidden;
}

.video-container video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

/* YouTube embed */
.video-wrapper {
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
}

.video-wrapper iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "What property makes videos responsive?",
              type: "fill",
              starterCode: `video { ___: 100%; height: auto; }`,
              answer: "max-width",
            },
            {
              question: "What padding-bottom creates 16:9 aspect ratio?",
              type: "fill",
              starterCode: `padding-bottom: ___%;`,
              answer: "56.25",
            },
            {
              question: "What position value creates responsive container?",
              type: "fill",
              starterCode: `.container { position: ___; }`,
              answer: "relative",
            },
          ],
        },
        {
          id: "rwd-frameworks",
          title: "RWD Frameworks",
          explanation: "Responsive web design frameworks provide pre-built CSS and components for creating responsive websites quickly. Popular frameworks include Bootstrap, Foundation, Tailwind CSS, Bulma, and Materialize. Frameworks provide grid systems, components, utilities, and responsive breakpoints. They speed up development and ensure consistency. Understanding frameworks helps leverage pre-built solutions for responsive design.",
          syntax: "Frameworks provide:\n- Grid systems\n- Components (buttons, forms, cards)\n- Utilities (spacing, typography)\n- Responsive breakpoints\n- JavaScript plugins",
          examples: [
            {
              title: "RWD Frameworks Example",
              description: "Using responsive frameworks",
              code: `/* Bootstrap example */
<div class="container">
  <div class="row">
    <div class="col-md-6 col-lg-4">
      <div class="card">Content</div>
    </div>
    <div class="col-md-6 col-lg-4">
      <div class="card">Content</div>
    </div>
    <div class="col-md-12 col-lg-4">
      <div class="card">Content</div>
    </div>
  </div>
</div>

/* Tailwind CSS example */
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  <div class="bg-blue-500 p-4">Content</div>
  <div class="bg-green-500 p-4">Content</div>
  <div class="bg-red-500 p-4">Content</div>
</div>

/* Framework benefits */
/* - Pre-built components */
/* - Consistent styling */
/* - Responsive by default */
/* - Cross-browser compatibility */`,
            },
          ],
          practiceQuestions: [
            {
              question: "What is a popular responsive framework?",
              type: "predict",
              starterCode: `Bootstrap, Tailwind CSS, Foundation`,
              answer: "Bootstrap (or Tailwind CSS, Foundation)",
            },
            {
              question: "What do frameworks provide?",
              type: "predict",
              starterCode: `Grid systems, components, utilities`,
              answer: "Grid systems, components, utilities, and responsive breakpoints",
            },
            {
              question: "What do frameworks speed up?",
              type: "predict",
              starterCode: `Development process`,
              answer: "Development and ensure consistency",
            },
          ],
        },
        {
          id: "rwd-templates",
          title: "RWD Templates",
          explanation: "Responsive web design templates provide pre-built layouts for common website types. Templates include responsive navigation, hero sections, content areas, and footers. Templates demonstrate responsive design patterns and best practices. They can be customized for specific needs. Using templates accelerates development and provides learning examples. Templates showcase responsive techniques in action.",
          syntax: "Templates include:\n- Responsive navigation\n- Hero sections\n- Content layouts\n- Footer sections\n- Media queries\n- Flexible grids",
          examples: [
            {
              title: "RWD Templates Example",
              description: "Responsive template structure",
              code: `/* Responsive template structure */
/* Header */
header {
  width: 100%;
  padding: 20px;
  background-color: #333;
  color: white;
}

/* Navigation */
nav {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}

@media (max-width: 768px) {
  nav {
    flex-direction: column;
  }
}

/* Hero section */
.hero {
  width: 100%;
  padding: 100px 20px;
  text-align: center;
  background-color: #f0f0f0;
}

/* Content */
.content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
}

/* Footer */
footer {
  width: 100%;
  padding: 20px;
  background-color: #333;
  color: white;
  text-align: center;
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "What do RWD templates provide?",
              type: "predict",
              starterCode: `Pre-built layouts`,
              answer: "Pre-built responsive layouts and components",
            },
            {
              question: "What sections do templates typically include?",
              type: "predict",
              starterCode: `Header, navigation, content, footer`,
              answer: "Header, navigation, hero, content, and footer",
            },
            {
              question: "What do templates demonstrate?",
              type: "predict",
              starterCode: `Responsive design patterns`,
              answer: "Responsive design patterns and best practices",
            },
          ],
        },
      ],
    },
    {
      id: "preprocessors",
      title: "CSS Preprocessors (SASS)",
      topics: [
        {
          id: "sass-tutorial",
          title: "SASS Tutorial",
          explanation: "SASS (Syntactically Awesome Style Sheets) is a CSS preprocessor that extends CSS with features like variables, nesting, mixins, functions, and imports. SASS files are compiled to CSS. SASS syntax includes SCSS (Sassy CSS) which uses curly braces and semicolons, and Sass (indented syntax). SASS features include variables for reusability, nesting for organization, mixins for code reuse, functions for calculations, and partials for modularity. SASS improves CSS maintainability and organization.",
          syntax: "Variables: $variable-name: value;\nNesting: selector { nested-selector { } }\nMixins: @mixin name { } @include name;\nFunctions: @function name($param) { @return value; }\nImports: @import 'file';",
          examples: [
            {
              title: "SASS Tutorial Example",
              description: "SASS features and syntax",
              code: `/* Variables */
$primary-color: #4CAF50;
$font-size: 16px;
$spacing: 20px;

.button {
  background-color: $primary-color;
  font-size: $font-size;
  padding: $spacing;
}

/* Nesting */
nav {
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  
  li {
    display: inline-block;
  }
  
  a {
    display: block;
    padding: 6px 12px;
    text-decoration: none;
  }
}

/* Mixins */
@mixin border-radius($radius) {
  -webkit-border-radius: $radius;
  -moz-border-radius: $radius;
  border-radius: $radius;
}

.box {
  @include border-radius(10px);
}

/* Functions */
@function calculate-width($columns, $gap) {
  @return ($columns * 100%) + ($gap * ($columns - 1));
}

.container {
  width: calculate-width(3, 2%);
}

/* Partials and imports */
/* _variables.scss */
$primary: #4CAF50;

/* main.scss */
@import 'variables';

.button {
  color: $primary;
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "What symbol is used for SASS variables?",
              type: "fill",
              starterCode: `$___: blue;`,
              answer: "color",
            },
            {
              question: "What feature allows code reuse in SASS?",
              type: "fill",
              starterCode: `@___ name { } @include name;`,
              answer: "mixin",
            },
            {
              question: "What does SASS compile to?",
              type: "predict",
              starterCode: `SASS files are compiled`,
              answer: "CSS",
            },
          ],
        },
      ],
    },
    {
      id: "examples-practice",
      title: "CSS Examples & Practice",
      topics: [
        {
          id: "css-templates",
          title: "CSS Templates",
          explanation: "CSS templates provide pre-built stylesheets and layouts for common website patterns. Templates include navigation bars, headers, footers, cards, buttons, forms, and complete page layouts. Templates demonstrate CSS best practices and responsive design. They can be customized and used as starting points for projects. Templates accelerate development and provide learning examples. Popular template sources include CSS frameworks and template libraries.",
          syntax: "Templates provide:\n- Pre-built CSS styles\n- Layout structures\n- Component styles\n- Responsive patterns",
          examples: [
            {
              title: "CSS Templates Example",
              description: "Common template components",
              code: `/* Template: Navigation Bar */
.navbar {
  background-color: #333;
  padding: 15px;
}

.navbar a {
  color: white;
  text-decoration: none;
  padding: 10px 20px;
}

/* Template: Card */
.card {
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  border-radius: 5px;
  padding: 20px;
  margin: 10px;
}

/* Template: Button */
.btn {
  padding: 10px 20px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

/* Template: Form */
.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
}

.form-group input {
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "What do CSS templates provide?",
              type: "predict",
              starterCode: `Pre-built stylesheets and layouts`,
              answer: "Pre-built stylesheets, layouts, and components",
            },
            {
              question: "What do templates demonstrate?",
              type: "predict",
              starterCode: `CSS best practices`,
              answer: "CSS best practices and responsive design",
            },
            {
              question: "What do templates accelerate?",
              type: "predict",
              starterCode: `Development process`,
              answer: "Development and provide learning examples",
            },
          ],
        },
        {
          id: "css-examples",
          title: "CSS Examples",
          explanation: "CSS examples demonstrate real-world usage of CSS properties, selectors, and techniques. Examples range from simple styling to complex layouts and animations. Studying examples helps understand how CSS works in practice. Examples include buttons, cards, navigation, forms, layouts, and effects. Examples reinforce learning and help build practical skills. They're essential for mastering CSS.",
          syntax: "Examples demonstrate CSS in action with complete, working code snippets",
          examples: [
            {
              title: "CSS Examples Collection",
              description: "Various CSS examples",
              code: `/* Example: Centered Card */
.card {
  width: 300px;
  margin: 0 auto;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  border-radius: 8px;
}

/* Example: Hover Effect */
.button {
  background-color: blue;
  transition: background-color 0.3s;
}

.button:hover {
  background-color: darkblue;
}

/* Example: Flexbox Layout */
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* Example: Grid Layout */
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

/* Example: Animation */
@keyframes slide {
  from { transform: translateX(0); }
  to { transform: translateX(100px); }
}

.animated {
  animation: slide 2s infinite;
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "What do CSS examples demonstrate?",
              type: "predict",
              starterCode: `Real-world CSS usage`,
              answer: "Real-world usage of CSS properties and techniques",
            },
            {
              question: "What do examples help build?",
              type: "predict",
              starterCode: `Practical skills`,
              answer: "Practical CSS skills",
            },
            {
              question: "What range do examples cover?",
              type: "predict",
              starterCode: `Simple to complex`,
              answer: "From simple styling to complex layouts",
            },
          ],
        },
        {
          id: "css-editor",
          title: "CSS Editor",
          explanation: "CSS editors are tools for writing and editing CSS code. Popular editors include Visual Studio Code, Sublime Text, Atom, and online editors like CodePen and JSFiddle. CSS editors provide features like syntax highlighting, auto-completion, code formatting, live preview, and error detection. Using a good CSS editor improves productivity and helps write cleaner, error-free CSS code. Many editors support CSS, HTML, and JavaScript together.",
          syntax: "CSS editors help write and edit CSS code with helpful features",
          examples: [
            {
              title: "CSS Editor Usage",
              description: "Using a CSS editor",
              code: `/* CSS editors provide:
- Syntax highlighting
- Auto-completion
- Code formatting
- Live preview
- Error detection
- Code snippets
- Emmet abbreviations
*/

/* Write CSS in editor */
.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}

/* Save as .css file */
/* Link in HTML: <link rel="stylesheet" href="style.css"> */

/* Online editors */
/* CodePen, JSFiddle, CodeSandbox */
/* Allow live editing and sharing */`,
            },
          ],
          practiceQuestions: [
            {
              question: "What is a CSS editor used for?",
              type: "predict",
              starterCode: `Writing and editing CSS code`,
              answer: "Writing and editing CSS code",
            },
            {
              question: "What feature highlights CSS syntax?",
              type: "predict",
              starterCode: `Syntax highlighting`,
              answer: "Syntax highlighting",
            },
            {
              question: "What is a popular CSS editor?",
              type: "fill",
              starterCode: `Visual Studio ___`,
              answer: "Code",
            },
          ],
        },
        {
          id: "css-snippets",
          title: "CSS Snippets",
          explanation: "CSS snippets are reusable code fragments for common CSS patterns. Snippets save time by providing ready-to-use code for buttons, cards, layouts, animations, and effects. Snippets can be saved in editors, shared, and customized. Common snippets include reset styles, clearfix, centering techniques, and utility classes. Using snippets accelerates development and ensures consistency. They're valuable resources for CSS developers.",
          syntax: "Snippets provide ready-to-use CSS code for common patterns",
          examples: [
            {
              title: "CSS Snippets Example",
              description: "Common CSS snippets",
              code: `/* Snippet: Clearfix */
.clearfix::after {
  content: "";
  display: table;
  clear: both;
}

/* Snippet: Centering */
.center {
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Snippet: Button */
.btn {
  padding: 10px 20px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.btn:hover {
  background-color: #45a049;
}

/* Snippet: Card */
.card {
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  padding: 20px;
}

/* Snippet: Responsive Image */
.responsive-img {
  max-width: 100%;
  height: auto;
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "What are CSS snippets?",
              type: "predict",
              starterCode: `Reusable code fragments`,
              answer: "Reusable code fragments for common patterns",
            },
            {
              question: "What do snippets save?",
              type: "predict",
              starterCode: `Development time`,
              answer: "Development time",
            },
            {
              question: "What do snippets ensure?",
              type: "predict",
              starterCode: `Code consistency`,
              answer: "Consistency and best practices",
            },
          ],
        },
        {
          id: "css-quiz",
          title: "CSS Quiz",
          explanation: "CSS quizzes test your knowledge and understanding of CSS concepts, properties, selectors, and best practices. Quizzes typically include multiple-choice questions, fill-in-the-blank exercises, and code completion challenges. Taking quizzes helps identify areas that need more practice and reinforces learning. Regular quizzes improve retention and help track progress. They're an effective way to prepare for interviews and certifications.",
          syntax: "Quizzes test CSS knowledge through various question formats",
          examples: [
            {
              title: "CSS Quiz Example",
              description: "Sample CSS quiz questions",
              code: `/* Quiz Question 1: What property sets text color? */
/* A) text-color */
/* B) color */
/* C) font-color */
/* Answer: B) color */

/* Quiz Question 2: Complete the CSS */
.container {
  display: ___; /* Answer: flex or grid */
}

/* Quiz Question 3: What does this do? */
.box {
  box-sizing: border-box;
}
/* Answer: Includes padding and border in width */

/* Quiz Question 4: What selector targets class? */
.___ { color: blue; } /* Answer: .classname */

/* Quiz Question 5: What property creates rounded corners? */
border-___: 10px; /* Answer: radius */`,
            },
          ],
          practiceQuestions: [
            {
              question: "What do CSS quizzes test?",
              type: "predict",
              starterCode: `CSS knowledge and understanding`,
              answer: "CSS concepts, properties, selectors, and best practices",
            },
            {
              question: "How do quizzes help learning?",
              type: "predict",
              starterCode: `Identify areas needing practice`,
              answer: "Identify areas needing practice and reinforce learning",
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
          id: "css-exercises",
          title: "CSS Exercises",
          explanation: "CSS exercises provide hands-on practice with CSS coding. Exercises range from simple tasks like styling a button to complex projects like building a complete website layout. Exercises help apply theoretical knowledge to practical scenarios. Common exercises include creating layouts, styling forms, building navigation, and implementing responsive designs. Regular practice with exercises builds confidence and improves coding skills. Exercises often include solutions for comparison and learning.",
          syntax: "Exercises provide coding challenges to practice CSS skills",
          examples: [
            {
              title: "CSS Exercises Example",
              description: "Sample CSS exercise tasks",
              code: `/* Exercise 1: Style a Button */
/* Task: Create a button with hover effect */
.button {
  /* Your code here */
}

/* Exercise 2: Create a Card Layout */
/* Task: Build a card with shadow and rounded corners */
.card {
  /* Your code here */
}

/* Exercise 3: Build a Navigation Bar */
/* Task: Create horizontal navigation with hover effects */
.navbar {
  /* Your code here */
}

/* Exercise 4: Responsive Layout */
/* Task: Create a layout that adapts to screen size */
.container {
  /* Your code here */
}

/* Exercise 5: Animation */
/* Task: Create a sliding animation */
@keyframes slide {
  /* Your code here */
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "What do CSS exercises provide?",
              type: "predict",
              starterCode: `Hands-on practice`,
              answer: "Hands-on practice with CSS coding",
            },
            {
              question: "What do exercises help apply?",
              type: "predict",
              starterCode: `Theoretical knowledge to practice`,
              answer: "Theoretical knowledge to practical scenarios",
            },
            {
              question: "What do exercises build?",
              type: "predict",
              starterCode: `Confidence and skills`,
              answer: "Confidence and coding skills",
            },
          ],
        },
        {
          id: "css-website",
          title: "CSS Website",
          explanation: "Building a complete CSS website involves creating stylesheets for multiple pages with consistent styling, responsive layouts, and interactive elements. A website typically includes navigation, header, main content, sidebar, and footer styles. Key considerations include CSS organization, responsive design, browser compatibility, performance optimization, and maintainability. Websites use CSS for styling, layouts, animations, and user interactions. Building a website is a comprehensive project that demonstrates mastery of CSS concepts.",
          syntax: "Websites use CSS for:\n- Styling HTML elements\n- Creating layouts\n- Responsive design\n- Animations and effects\n- User interactions",
          examples: [
            {
              title: "CSS Website Example",
              description: "Complete website CSS structure",
              code: `/* Website CSS Structure */

/* Reset/Normalize */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Variables */
:root {
  --primary-color: #4CAF50;
  --secondary-color: #2196F3;
  --spacing: 20px;
}

/* Header */
header {
  background-color: #333;
  color: white;
  padding: var(--spacing);
}

/* Navigation */
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* Main Content */
main {
  max-width: 1200px;
  margin: 0 auto;
  padding: var(--spacing);
}

/* Footer */
footer {
  background-color: #333;
  color: white;
  padding: var(--spacing);
  text-align: center;
}

/* Responsive */
@media (max-width: 768px) {
  nav {
    flex-direction: column;
  }
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "What does a CSS website include?",
              type: "predict",
              starterCode: `Multiple pages with consistent styling`,
              answer: "Stylesheets for multiple pages with consistent styling",
            },
            {
              question: "What is important for website CSS?",
              type: "predict",
              starterCode: `Organization, responsive design, performance`,
              answer: "Organization, responsive design, browser compatibility, performance",
            },
            {
              question: "What does building a website demonstrate?",
              type: "predict",
              starterCode: `Mastery of CSS concepts`,
              answer: "Mastery of CSS concepts and practical skills",
            },
          ],
        },
        {
          id: "css-syllabus",
          title: "CSS Syllabus",
          explanation: "A CSS syllabus outlines the topics, concepts, and skills covered in a CSS course or learning path. A typical syllabus includes CSS basics, selectors, properties, layouts (Flexbox, Grid), responsive design, animations, and best practices. The syllabus provides a structured learning path from beginner to advanced topics. It helps learners understand what they'll study and track their progress. A well-organized syllabus ensures comprehensive coverage of CSS concepts.",
          syntax: "A syllabus organizes CSS topics in a structured learning sequence",
          examples: [
            {
              title: "CSS Syllabus Example",
              description: "Sample CSS course syllabus",
              code: `/* CSS Course Syllabus */

/* Week 1: CSS Basics */
- Introduction to CSS
- CSS Syntax and Selectors
- Colors, Backgrounds, Borders
- Text and Fonts

/* Week 2: Layout */
- Box Model
- Display and Position
- Flexbox
- CSS Grid

/* Week 3: Advanced */
- Responsive Design
- Media Queries
- Animations and Transitions
- CSS Variables

/* Week 4: Best Practices */
- CSS Organization
- Performance Optimization
- Browser Compatibility
- Accessibility

/* Week 5: Projects */
- Build Complete Website
- Responsive Layout
- Interactive Components
- Portfolio Project`,
            },
          ],
          practiceQuestions: [
            {
              question: "What does a CSS syllabus outline?",
              type: "predict",
              starterCode: `Topics and concepts`,
              answer: "Topics, concepts, and skills covered in CSS learning",
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
          id: "css-study-plan",
          title: "CSS Study Plan",
          explanation: "A CSS study plan provides a structured schedule for learning CSS effectively. A good study plan includes daily or weekly goals, practice time, review sessions, and project work. It helps maintain consistency and track progress. Study plans typically start with basics and gradually progress to advanced topics. They include time for reading, coding practice, exercises, and building projects. Following a study plan ensures comprehensive learning and skill development.",
          syntax: "A study plan schedules CSS learning activities over time",
          examples: [
            {
              title: "CSS Study Plan Example",
              description: "Sample CSS study schedule",
              code: `/* CSS Study Plan - 6 Weeks */

/* Week 1: Foundation */
Day 1-2: CSS Basics (2 hours/day)
Day 3-4: Selectors and Properties (2 hours/day)
Day 5-7: Practice Exercises (1 hour/day)

/* Week 2: Layout */
Day 1-2: Box Model and Display (2 hours/day)
Day 3-4: Flexbox (2 hours/day)
Day 5-7: Build Simple Layout (2 hours/day)

/* Week 3: Advanced Layout */
Day 1-2: CSS Grid (2 hours/day)
Day 3-4: Positioning (2 hours/day)
Day 5-7: Complex Layout Project (2 hours/day)

/* Week 4: Responsive Design */
Day 1-2: Media Queries (2 hours/day)
Day 3-4: Responsive Techniques (2 hours/day)
Day 5-7: Responsive Website (3 hours/day)

/* Week 5: Advanced Features */
Day 1-2: Animations (2 hours/day)
Day 3-4: Transforms and Transitions (2 hours/day)
Day 5-7: Interactive Components (2 hours/day)

/* Week 6: Projects */
Day 1-7: Complete Website Project (3 hours/day)`,
            },
          ],
          practiceQuestions: [
            {
              question: "What does a study plan provide?",
              type: "predict",
              starterCode: `Structured schedule`,
              answer: "A structured schedule for learning CSS",
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
          id: "css-interview-prep",
          title: "CSS Interview Prep",
          explanation: "CSS interview preparation involves studying common CSS concepts, properties, selectors, and best practices that employers test. Common interview topics include CSS specificity, box model, Flexbox, Grid, responsive design, animations, and performance optimization. Preparation includes practicing coding challenges, reviewing CSS concepts, understanding best practices, and being able to explain CSS concepts clearly. Mock interviews and practice questions help build confidence for real interviews.",
          syntax: "Interview prep focuses on commonly tested CSS knowledge and skills",
          examples: [
            {
              title: "CSS Interview Prep Topics",
              description: "Common CSS interview topics",
              code: `/* CSS Interview Preparation Topics */

/* Core Concepts */
- CSS Specificity
- Box Model
- Display and Position
- Flexbox and Grid
- Responsive Design

/* Technical Skills */
- Writing clean, maintainable CSS
- Understanding CSS architecture
- Browser compatibility
- Performance optimization
- CSS methodologies (BEM, OOCSS)

/* Practice Areas */
- Coding challenges
- Layout problems
- Explain concepts clearly
- Debug CSS issues
- Optimize CSS code

/* Common Questions */
- "Explain CSS specificity"
- "Difference between Flexbox and Grid"
- "How do you center an element?"
- "Explain the box model"
- "How do you make a responsive layout?"`,
            },
          ],
          practiceQuestions: [
            {
              question: "What do CSS interviews commonly test?",
              type: "predict",
              starterCode: `CSS specificity, box model, layouts`,
              answer: "CSS specificity, box model, Flexbox, Grid, responsive design",
            },
            {
              question: "What helps prepare for interviews?",
              type: "predict",
              starterCode: `Practice questions, mock interviews`,
              answer: "Practicing coding challenges and reviewing CSS concepts",
            },
            {
              question: "What should you be able to do in interviews?",
              type: "predict",
              starterCode: `Explain concepts clearly`,
              answer: "Explain CSS concepts clearly and write clean code",
            },
          ],
        },
        {
          id: "css-bootcamp",
          title: "CSS Bootcamp",
          explanation: "A CSS bootcamp is an intensive, accelerated learning program focused on CSS and web styling. Bootcamps typically cover CSS fundamentals, advanced layouts, responsive design, animations, and real-world projects in a condensed timeframe. They provide structured learning, hands-on practice, mentorship, and project-based learning. Bootcamps are designed to quickly build practical CSS skills and prepare for web development careers. They often include HTML, JavaScript, and frameworks as well.",
          syntax: "Bootcamps provide intensive CSS training in a short timeframe",
          examples: [
            {
              title: "CSS Bootcamp Structure",
              description: "Typical bootcamp curriculum",
              code: `/* CSS Bootcamp - 4 Weeks */

/* Week 1: CSS Fundamentals */
- CSS Basics and Syntax
- Selectors and Properties
- Box Model and Layout
- Daily Projects

/* Week 2: Advanced Layout */
- Flexbox
- CSS Grid
- Positioning
- Complex Layouts

/* Week 3: Responsive & Advanced */
- Responsive Design
- Media Queries
- Animations and Transitions
- CSS Variables

/* Week 4: Projects & Portfolio */
- Build Complete Website
- Responsive Portfolio
- Code Review
- Career Preparation

/* Bootcamp Features */
- Intensive daily practice
- Real-world projects
- Code reviews
- Portfolio building
- Career support`,
            },
          ],
          practiceQuestions: [
            {
              question: "What is a CSS bootcamp?",
              type: "predict",
              starterCode: `Intensive learning program`,
              answer: "An intensive, accelerated CSS learning program",
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
              answer: "Quickly build practical CSS skills for web development",
            },
          ],
        },
        {
          id: "css-certificate",
          title: "CSS Certificate",
          explanation: "A CSS certificate validates your CSS knowledge and skills through a recognized credential. Certificates are earned by completing courses, passing exams, or demonstrating CSS proficiency through projects. They can enhance resumes, demonstrate commitment to learning, and show employers your CSS expertise. Certificates may be from online platforms, educational institutions, or professional organizations. They provide proof of CSS competency and can help advance careers in web development.",
          syntax: "Certificates validate CSS knowledge through courses or exams",
          examples: [
            {
              title: "CSS Certificate Information",
              description: "About CSS certificates",
              code: `/* CSS Certificate Program */

/* Certificate Requirements */
- Complete CSS course modules
- Pass CSS knowledge exam
- Build portfolio project
- Demonstrate CSS proficiency

/* Certificate Benefits */
- Validate CSS skills
- Enhance resume
- Show expertise to employers
- Advance web development career

/* How to Earn */
- Complete online courses
- Pass certification exams
- Submit portfolio projects
- Meet proficiency requirements

/* Certificate Topics */
- CSS Fundamentals
- Layout Techniques
- Responsive Design
- Advanced Features
- Best Practices`,
            },
          ],
          practiceQuestions: [
            {
              question: "What does a CSS certificate validate?",
              type: "predict",
              starterCode: `CSS knowledge and skills`,
              answer: "CSS knowledge and skills",
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
              answer: "Enhance resume and demonstrate CSS expertise to employers",
            },
          ],
        },
      ],
    },
    {
      id: "reference",
      title: "CSS References",
      topics: [
        {
          id: "css-reference",
          title: "CSS Reference",
          explanation: "CSS reference provides a comprehensive guide to all CSS properties, values, and syntax. References include property descriptions, possible values, examples, browser support, and related properties. CSS references help developers quickly find information about specific properties and their usage. They're essential tools for CSS development and learning. References are organized by categories like layout, typography, colors, and effects.",
          syntax: "Reference format:\nproperty: value;\n\nCategories: Layout, Typography, Colors, Effects, Animations",
          examples: [
            {
              title: "CSS Reference Example",
              description: "CSS property reference format",
              code: `/* CSS Property Reference */

/* Property: color */
/* Description: Sets text color */
/* Values: color name, hex, rgb, rgba, hsl */
/* Example: */
p {
  color: blue;
}

/* Property: display */
/* Description: Sets display type */
/* Values: block, inline, inline-block, flex, grid, none */
/* Example: */
div {
  display: flex;
}

/* Property: margin */
/* Description: Sets outer spacing */
/* Values: length, percentage, auto */
/* Example: */
.container {
  margin: 20px;
}

/* Reference Categories */
/* - Layout: display, position, float, flexbox, grid */
/* - Typography: font, text, line-height */
/* - Colors: color, background-color */
/* - Effects: box-shadow, border-radius, filter */`,
            },
          ],
          practiceQuestions: [
            {
              question: "What does a CSS reference provide?",
              type: "predict",
              starterCode: `Comprehensive guide to CSS properties`,
              answer: "Comprehensive guide to CSS properties, values, and syntax",
            },
            {
              question: "What do references help developers do?",
              type: "predict",
              starterCode: `Quickly find information`,
              answer: "Quickly find information about CSS properties",
            },
            {
              question: "How are references organized?",
              type: "predict",
              starterCode: `By categories`,
              answer: "By categories like layout, typography, colors, effects",
            },
          ],
        },
        {
          id: "css-selectors-reference",
          title: "CSS Selectors Reference",
          explanation: "CSS selectors reference lists all selector types and their syntax. Selectors include element selectors, class selectors, ID selectors, attribute selectors, pseudo-class selectors, and pseudo-element selectors. Each selector type has specific syntax and use cases. Understanding selectors is fundamental to CSS. Selectors determine which elements receive styling. The reference helps developers choose the right selector for their needs.",
          syntax: "Element: element { }\nClass: .classname { }\nID: #idname { }\nAttribute: [attribute] { }\nPseudo-class: :pseudo-class { }\nPseudo-element: ::pseudo-element { }",
          examples: [
            {
              title: "CSS Selectors Reference",
              description: "All CSS selector types",
              code: `/* Element Selector */
p { color: blue; }

/* Class Selector */
.classname { color: red; }

/* ID Selector */
#idname { color: green; }

/* Attribute Selector */
[type="text"] { border: 1px solid; }

/* Pseudo-class Selector */
a:hover { color: orange; }

/* Pseudo-element Selector */
p::first-line { font-weight: bold; }

/* Universal Selector */
* { margin: 0; }

/* Descendant Selector */
div p { color: blue; }

/* Child Selector */
div > p { color: red; }

/* Adjacent Sibling */
h1 + p { font-weight: bold; }

/* General Sibling */
h1 ~ p { color: green; }`,
            },
          ],
          practiceQuestions: [
            {
              question: "What selector targets all elements?",
              type: "fill",
              starterCode: `___ { margin: 0; }`,
              answer: "*",
            },
            {
              question: "What selector targets class?",
              type: "fill",
              starterCode: `.___ { color: blue; }`,
              answer: "classname",
            },
            {
              question: "What selector targets ID?",
              type: "fill",
              starterCode: `#___ { color: red; }`,
              answer: "idname",
            },
          ],
        },
        {
          id: "css-combinators-reference",
          title: "CSS Combinators Reference",
          explanation: "CSS combinators reference explains the relationship between selectors. Combinators include descendant (space), child (>), adjacent sibling (+), and general sibling (~). Each combinator has specific syntax and behavior. Combinators allow precise element targeting based on DOM relationships. Understanding combinators helps write more specific and efficient CSS selectors.",
          syntax: "Descendant: ancestor descendant { }\nChild: parent > child { }\nAdjacent: element + sibling { }\nGeneral: element ~ sibling { }",
          examples: [
            {
              title: "CSS Combinators Reference",
              description: "All CSS combinator types",
              code: `/* Descendant Combinator (space) */
div p { color: blue; }

/* Child Combinator (>) */
div > p { color: red; }

/* Adjacent Sibling Combinator (+) */
h1 + p { font-weight: bold; }

/* General Sibling Combinator (~) */
h1 ~ p { color: green; }

/* Combined */
.container > .item + .item {
  margin-top: 10px;
}

/* Nested */
nav ul li a {
  text-decoration: none;
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "What combinator selects descendants?",
              type: "fill",
              starterCode: `div ___ p { color: blue; }`,
              answer: " ",
            },
            {
              question: "What combinator selects direct children?",
              type: "fill",
              starterCode: `div ___ p { color: red; }`,
              answer: ">",
            },
            {
              question: "What combinator selects immediately following sibling?",
              type: "fill",
              starterCode: `h1 ___ p { font-weight: bold; }`,
              answer: "+",
            },
          ],
        },
        {
          id: "css-pseudo-classes-reference",
          title: "CSS Pseudo-classes Reference",
          explanation: "CSS pseudo-classes reference lists all pseudo-class selectors and their usage. Pseudo-classes include :hover, :active, :focus, :visited, :first-child, :last-child, :nth-child(), :not(), :empty, and many more. Pseudo-classes select elements based on their state or position. They're essential for interactive styling and dynamic effects. The reference helps developers find the right pseudo-class for their needs.",
          syntax: "selector:pseudo-class { }\n\nExamples: :hover, :active, :focus, :first-child, :nth-child(n), :not(selector), :empty",
          examples: [
            {
              title: "CSS Pseudo-classes Reference",
              description: "Common pseudo-classes",
              code: `/* Link States */
a:link { color: blue; }
a:visited { color: purple; }
a:hover { color: red; }
a:active { color: green; }

/* Structural */
:first-child { font-weight: bold; }
:last-child { border-bottom: none; }
:nth-child(2n) { background-color: #f0f0f0; }
:nth-child(odd) { background-color: white; }
:nth-child(even) { background-color: gray; }

/* Form States */
input:focus { border-color: blue; }
input:checked { background-color: green; }
input:disabled { opacity: 0.5; }
input:required { border-color: red; }

/* Other */
:not(.excluded) { color: black; }
:empty { display: none; }
:target { background-color: yellow; }`,
            },
          ],
          practiceQuestions: [
            {
              question: "What pseudo-class styles on hover?",
              type: "fill",
              starterCode: `a:___ { color: red; }`,
              answer: "hover",
            },
            {
              question: "What pseudo-class selects first child?",
              type: "fill",
              starterCode: `li:___ { font-weight: bold; }`,
              answer: "first-child",
            },
            {
              question: "What pseudo-class selects every even element?",
              type: "fill",
              starterCode: `li:___(even) { background-color: gray; }`,
              answer: "nth-child",
            },
          ],
        },
        {
          id: "css-pseudo-elements-reference",
          title: "CSS Pseudo-elements Reference",
          explanation: "CSS pseudo-elements reference lists all pseudo-element selectors and their usage. Pseudo-elements include ::before, ::after, ::first-line, ::first-letter, ::selection, and ::placeholder. Pseudo-elements style specific parts of elements. They use double colons (::) in CSS3. Pseudo-elements are useful for decorative elements, icons, and text effects. The reference helps developers understand and use pseudo-elements effectively.",
          syntax: "selector::pseudo-element { }\n\nExamples: ::before, ::after, ::first-line, ::first-letter, ::selection, ::placeholder",
          examples: [
            {
              title: "CSS Pseudo-elements Reference",
              description: "All CSS pseudo-elements",
              code: `/* Before */
p::before {
  content: "→ ";
  color: blue;
}

/* After */
p::after {
  content: " ←";
  color: red;
}

/* First Letter */
p::first-letter {
  font-size: 200%;
  color: red;
}

/* First Line */
p::first-line {
  font-weight: bold;
}

/* Selection */
::selection {
  background-color: yellow;
  color: black;
}

/* Placeholder */
input::placeholder {
  color: gray;
  font-style: italic;
}

/* Marker (for lists) */
::marker {
  color: blue;
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "What pseudo-element creates content before?",
              type: "fill",
              starterCode: `p::___ { content: "→ "; }`,
              answer: "before",
            },
            {
              question: "What pseudo-element styles first letter?",
              type: "fill",
              starterCode: `p::___ { font-size: 200%; }`,
              answer: "first-letter",
            },
            {
              question: "What property is required for ::before and ::after?",
              type: "fill",
              starterCode: `p::before { ___: "Text"; }`,
              answer: "content",
            },
          ],
        },
        {
          id: "css-at-rules",
          title: "CSS At-rules",
          explanation: "CSS at-rules are statements that instruct CSS how to behave. Common at-rules include @media (media queries), @import (import stylesheets), @font-face (define fonts), @keyframes (animations), @supports (feature queries), @page (print styles), and @charset (character encoding). At-rules start with @ symbol. Understanding at-rules is essential for advanced CSS usage.",
          syntax: "@rule-name value { }\n\nExamples: @media, @import, @font-face, @keyframes, @supports, @page, @charset",
          examples: [
            {
              title: "CSS At-rules Example",
              description: "Common CSS at-rules",
              code: `/* @charset */
@charset "UTF-8";

/* @import */
@import url('styles.css');
@import 'print.css' print;

/* @media */
@media (max-width: 768px) {
  body { font-size: 14px; }
}

/* @font-face */
@font-face {
  font-family: 'CustomFont';
  src: url('font.woff2') format('woff2');
}

/* @keyframes */
@keyframes slide {
  from { transform: translateX(0); }
  to { transform: translateX(100px); }
}

/* @supports */
@supports (display: grid) {
  .container { display: grid; }
}

/* @page */
@page {
  margin: 2cm;
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "What symbol starts at-rules?",
              type: "fill",
              starterCode: `@___ (max-width: 768px) { }`,
              answer: "media",
            },
            {
              question: "What at-rule defines animations?",
              type: "fill",
              starterCode: `@___ slide { from { } to { } }`,
              answer: "keyframes",
            },
            {
              question: "What at-rule imports stylesheets?",
              type: "fill",
              starterCode: `@___ url('styles.css');`,
              answer: "import",
            },
          ],
        },
        {
          id: "css-functions",
          title: "CSS Functions",
          explanation: "CSS functions perform calculations and return values. Common functions include calc() (calculations), var() (CSS variables), url() (resource URLs), rgb()/rgba() (colors), hsl()/hsla() (colors), linear-gradient() (gradients), radial-gradient() (gradients), attr() (attribute values), and scale()/rotate() (transforms). Functions enable dynamic values and complex styling. Understanding functions expands CSS capabilities.",
          syntax: "function-name(value)\n\nExamples: calc(), var(), url(), rgb(), hsl(), linear-gradient(), attr()",
          examples: [
            {
              title: "CSS Functions Example",
              description: "Common CSS functions",
              code: `/* calc() */
.width {
  width: calc(100% - 40px);
}

/* var() */
:root {
  --primary-color: #4CAF50;
}

.button {
  background-color: var(--primary-color);
}

/* url() */
.bg {
  background-image: url('image.jpg');
}

/* rgb() */
.color {
  color: rgb(255, 0, 0);
}

/* rgba() */
.transparent {
  color: rgba(255, 0, 0, 0.5);
}

/* hsl() */
.hsl-color {
  color: hsl(0, 100%, 50%);
}

/* linear-gradient() */
.gradient {
  background: linear-gradient(to right, red, blue);
}

/* attr() */
.tooltip::after {
  content: attr(data-tooltip);
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "What function performs calculations?",
              type: "fill",
              starterCode: `width: ___(100% - 40px);`,
              answer: "calc",
            },
            {
              question: "What function accesses CSS variables?",
              type: "fill",
              starterCode: `color: ___(--color);`,
              answer: "var",
            },
            {
              question: "What function creates gradients?",
              type: "fill",
              starterCode: `background: ___-gradient(to right, red, blue);`,
              answer: "linear",
            },
          ],
        },
        {
          id: "css-reference-aural",
          title: "CSS Reference Aural",
          explanation: "CSS aural (speech) properties control how content is presented to screen readers and speech synthesizers. Aural properties include voice-family, voice-rate, voice-pitch, voice-volume, pause, cue, and speak. Aural CSS enhances accessibility for visually impaired users. While not widely supported, aural CSS demonstrates CSS's versatility. Modern accessibility focuses more on semantic HTML and ARIA attributes.",
          syntax: "voice-family: name;\nvoice-rate: value;\nvoice-pitch: value;\nvoice-volume: value;\npause: value;\nspeak: normal|none|spell-out;",
          examples: [
            {
              title: "CSS Reference Aural Example",
              description: "Aural CSS properties",
              code: `/* Voice family */
h1 {
  voice-family: male;
}

/* Voice rate */
p {
  voice-rate: medium;
}

/* Voice pitch */
.emphasis {
  voice-pitch: high;
}

/* Voice volume */
.quiet {
  voice-volume: soft;
}

/* Pause */
h2 {
  pause: 1s;
}

/* Speak */
.numbers {
  speak: spell-out;
}

/* Note: Aural CSS has limited browser support */
/* Modern accessibility uses ARIA attributes instead */`,
            },
          ],
          practiceQuestions: [
            {
              question: "What do aural CSS properties control?",
              type: "predict",
              starterCode: `Screen reader presentation`,
              answer: "How content is presented to screen readers",
            },
            {
              question: "What property sets voice family?",
              type: "fill",
              starterCode: `voice-___: male;`,
              answer: "family",
            },
            {
              question: "Is aural CSS widely supported?",
              type: "predict",
              starterCode: `Limited browser support`,
              answer: "No, it has limited browser support",
            },
          ],
        },
        {
          id: "css-web-safe-fonts",
          title: "CSS Web Safe Fonts",
          explanation: "Web safe fonts are fonts that are pre-installed on most operating systems and browsers. Using web safe fonts ensures consistent text rendering across devices. Common web safe fonts include Arial, Helvetica, Times New Roman, Georgia, Verdana, Courier New, and serif/sans-serif generic families. Font stacks combine multiple fonts with fallbacks. Web safe fonts are reliable choices for cross-platform compatibility.",
          syntax: "font-family: 'Font Name', fallback, generic-family;\n\nWeb safe: Arial, Helvetica, Times New Roman, Georgia, Verdana, Courier New",
          examples: [
            {
              title: "CSS Web Safe Fonts Example",
              description: "Using web safe fonts",
              code: `/* Sans-serif stack */
.sans-serif {
  font-family: Arial, Helvetica, sans-serif;
}

/* Serif stack */
.serif {
  font-family: 'Times New Roman', Times, serif;
}

/* Monospace stack */
.monospace {
  font-family: 'Courier New', Courier, monospace;
}

/* Common web safe fonts */
body {
  font-family: Arial, Helvetica, sans-serif;
}

.heading {
  font-family: Georgia, 'Times New Roman', serif;
}

.code {
  font-family: 'Courier New', Courier, monospace;
}

/* Font stack with fallbacks */
.text {
  font-family: 'Custom Font', Arial, Helvetica, sans-serif;
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "What are web safe fonts?",
              type: "predict",
              starterCode: `Pre-installed fonts on most systems`,
              answer: "Fonts pre-installed on most operating systems",
            },
            {
              question: "What is a common web safe sans-serif font?",
              type: "fill",
              starterCode: `font-family: ___, Helvetica, sans-serif;`,
              answer: "Arial",
            },
            {
              question: "What ensures font fallback?",
              type: "predict",
              starterCode: `Font stacks with multiple fonts`,
              answer: "Font stacks with multiple fonts and generic families",
            },
          ],
        },
        {
          id: "css-animatable",
          title: "CSS Animatable",
          explanation: "CSS animatable properties can be animated using transitions and animations. Most CSS properties are animatable including colors, dimensions, transforms, and opacity. Non-animatable properties include display, position (static), and visibility (hidden/visible). Understanding which properties are animatable helps create smooth animations. Animatable properties enable dynamic, interactive user experiences.",
          syntax: "Animatable: color, width, height, transform, opacity, margin, padding\nNon-animatable: display, position (static), visibility",
          examples: [
            {
              title: "CSS Animatable Example",
              description: "Animatable vs non-animatable properties",
              code: `/* Animatable properties */
.animatable {
  /* Colors */
  color: blue;
  background-color: red;
  
  /* Dimensions */
  width: 100px;
  height: 100px;
  
  /* Transforms */
  transform: translateX(0);
  
  /* Opacity */
  opacity: 1;
  
  /* Spacing */
  margin: 10px;
  padding: 20px;
  
  /* Can be animated */
  transition: all 0.3s;
}

/* Non-animatable */
.non-animatable {
  display: block; /* Cannot animate */
  position: static; /* Cannot animate */
  visibility: visible; /* Cannot animate */
}

/* Animation example */
@keyframes move {
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(100px);
    opacity: 0.5;
  }
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "What properties can be animated?",
              type: "predict",
              starterCode: `Colors, dimensions, transforms, opacity`,
              answer: "Most properties including colors, dimensions, transforms, opacity",
            },
            {
              question: "Can display property be animated?",
              type: "predict",
              starterCode: `display: block;`,
              answer: "No, display is not animatable",
            },
            {
              question: "What enables smooth animations?",
              type: "predict",
              starterCode: `Animatable properties`,
              answer: "Animatable properties with transitions or animations",
            },
          ],
        },
        {
          id: "css-units-reference",
          title: "CSS Units Reference",
          explanation: "CSS units reference lists all available units for sizing. Absolute units include px (pixels), pt (points), cm (centimeters), mm (millimeters), in (inches), pc (picas). Relative units include em (parent font size), rem (root font size), % (percentage), vw/vh (viewport width/height), vmin/vmax (viewport min/max), ch (character width), ex (x-height). Understanding units helps create flexible and responsive designs.",
          syntax: "Absolute: px, pt, cm, mm, in, pc\nRelative: em, rem, %, vw, vh, vmin, vmax, ch, ex",
          examples: [
            {
              title: "CSS Units Reference",
              description: "All CSS units",
              code: `/* Absolute Units */
.pixels { width: 300px; }
.points { font-size: 12pt; }
.centimeters { width: 10cm; }
.millimeters { width: 100mm; }
.inches { width: 4in; }

/* Relative Units */
.em { font-size: 1.2em; } /* Relative to parent */
.rem { font-size: 1.5rem; } /* Relative to root */
.percent { width: 50%; } /* Percentage */
.viewport-width { width: 50vw; } /* Viewport width */
.viewport-height { height: 50vh; } /* Viewport height */
.viewport-min { width: 50vmin; } /* Smaller viewport dimension */
.viewport-max { width: 50vmax; } /* Larger viewport dimension */
.character { width: 20ch; } /* Character width */
.x-height { font-size: 2ex; } /* x-height */

/* Common usage */
.responsive {
  width: 90%;
  max-width: 1200px;
  padding: 2rem;
  font-size: 1.125rem;
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "What unit is relative to root font size?",
              type: "fill",
              starterCode: `font-size: 2___;`,
              answer: "rem",
            },
            {
              question: "What unit represents viewport width?",
              type: "fill",
              starterCode: `width: 50___;`,
              answer: "vw",
            },
            {
              question: "What unit is better for responsive design?",
              type: "predict",
              starterCode: `Relative units`,
              answer: "Relative units (em, rem, %, vw, vh)",
            },
          ],
        },
        {
          id: "css-px-em-converter",
          title: "CSS PX‑EM Converter",
          explanation: "PX to EM conversion helps convert fixed pixel values to relative em units. Conversion depends on the base font size (typically 16px). Formula: em = px / base-font-size. For 16px base: 12px = 0.75em, 14px = 0.875em, 16px = 1em, 18px = 1.125em, 24px = 1.5em, 32px = 2em. EM units scale better for responsive design. Understanding conversion helps create flexible typography.",
          syntax: "Conversion: em = px / base-font-size\n\nDefault base: 16px\n12px = 0.75em\n14px = 0.875em\n16px = 1em\n18px = 1.125em\n24px = 1.5em\n32px = 2em",
          examples: [
            {
              title: "CSS PX-EM Converter Example",
              description: "Converting between PX and EM",
              code: `/* Base font size: 16px */

/* PX to EM conversion */
.px-12 { font-size: 12px; } /* = 0.75em */
.px-14 { font-size: 14px; } /* = 0.875em */
.px-16 { font-size: 16px; } /* = 1em */
.px-18 { font-size: 18px; } /* = 1.125em */
.px-24 { font-size: 24px; } /* = 1.5em */
.px-32 { font-size: 32px; } /* = 2em */

/* EM equivalents */
.em-075 { font-size: 0.75em; } /* = 12px */
.em-0875 { font-size: 0.875em; } /* = 14px */
.em-1 { font-size: 1em; } /* = 16px */
.em-1125 { font-size: 1.125em; } /* = 18px */
.em-15 { font-size: 1.5em; } /* = 24px */
.em-2 { font-size: 2em; } /* = 32px */

/* Conversion formula */
/* em = px / 16 (for 16px base) */

/* Responsive typography */
.responsive-text {
  font-size: clamp(1rem, 4vw, 2rem);
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "What is the default base font size?",
              type: "fill",
              starterCode: `Base: ___px`,
              answer: "16",
            },
            {
              question: "What is 24px in em? (16px base)",
              type: "fill",
              starterCode: `24px = ___em`,
              answer: "1.5",
            },
            {
              question: "What unit scales better for responsive design?",
              type: "predict",
              starterCode: `EM is relative`,
              answer: "EM (relative unit)",
            },
          ],
        },
        {
          id: "css-colors-reference",
          title: "CSS Colors Reference",
          explanation: "CSS colors reference provides comprehensive information about color values in CSS. Colors can be specified using color names (red, blue, etc.), RGB values (rgb(255, 0, 0)), RGBA values (rgba(255, 0, 0, 0.5)), HEX codes (#FF0000), HSL values (hsl(0, 100%, 50%)), and HSLA values (hsla(0, 100%, 50%, 0.5)). The reference helps developers choose and specify colors correctly.",
          syntax: "Color names: red, blue, green\nRGB: rgb(255, 0, 0)\nRGBA: rgba(255, 0, 0, 0.5)\nHEX: #FF0000\nHSL: hsl(0, 100%, 50%)\nHSLA: hsla(0, 100%, 50%, 0.5)",
          examples: [
            {
              title: "CSS Colors Reference",
              description: "All CSS color formats",
              code: `/* Color Names */
.red { color: red; }
.blue { color: blue; }
.green { color: green; }

/* RGB */
.rgb-red { color: rgb(255, 0, 0); }
.rgb-green { color: rgb(0, 255, 0); }
.rgb-blue { color: rgb(0, 0, 255); }

/* RGBA */
.rgba-transparent { color: rgba(255, 0, 0, 0.5); }

/* HEX */
.hex-red { color: #FF0000; }
.hex-green { color: #00FF00; }
.hex-blue { color: #0000FF; }
.hex-short { color: #F00; } /* Short form */

/* HSL */
.hsl-red { color: hsl(0, 100%, 50%); }
.hsl-green { color: hsl(120, 100%, 50%); }

/* HSLA */
.hsla-transparent { color: hsla(0, 100%, 50%, 0.5); }

/* Common colors */
.primary { color: #4CAF50; }
.secondary { color: #2196F3; }
.danger { color: #f44336; }
.warning { color: #ff9800; }`,
            },
          ],
          practiceQuestions: [
            {
              question: "What is the HEX code for red?",
              type: "fill",
              starterCode: `color: #___;`,
              answer: "FF0000",
            },
            {
              question: "What RGB value creates blue?",
              type: "fill",
              starterCode: `color: rgb(0, 0, ___);`,
              answer: "255",
            },
            {
              question: "What color format includes transparency?",
              type: "predict",
              starterCode: `RGBA and HSLA`,
              answer: "RGBA and HSLA",
            },
          ],
        },
        {
          id: "css-color-values",
          title: "CSS Color Values",
          explanation: "CSS color values reference lists all valid ways to specify colors. Color values include predefined color names (140+ names), RGB/RGBA numeric values, HEX codes, HSL/HSLA values, currentColor keyword, and transparent keyword. Understanding color values helps developers choose appropriate color formats for their needs. Different formats suit different use cases.",
          syntax: "Color names: red, blue, green, etc.\nRGB: rgb(r, g, b)\nRGBA: rgba(r, g, b, a)\nHEX: #RRGGBB or #RGB\nHSL: hsl(h, s%, l%)\nHSLA: hsla(h, s%, l%, a)\nKeywords: currentColor, transparent",
          examples: [
            {
              title: "CSS Color Values Example",
              description: "All CSS color value formats",
              code: `/* Predefined Names */
.named { color: red; }

/* RGB */
.rgb { color: rgb(255, 0, 0); }

/* RGBA */
.rgba { color: rgba(255, 0, 0, 0.5); }

/* HEX (6 digits) */
.hex6 { color: #FF0000; }

/* HEX (3 digits) */
.hex3 { color: #F00; }

/* HSL */
.hsl { color: hsl(0, 100%, 50%); }

/* HSLA */
.hsla { color: hsla(0, 100%, 50%, 0.5); }

/* Keywords */
.current { color: currentColor; }
.transparent { color: transparent; }

/* Number of color names */
/* CSS supports 140+ predefined color names */

/* Examples */
.tomato { color: tomato; }
.coral { color: coral; }
.turquoise { color: turquoise; }
.salmon { color: salmon; }`,
            },
          ],
          practiceQuestions: [
            {
              question: "How many predefined color names does CSS support?",
              type: "fill",
              starterCode: `___+ color names`,
              answer: "140",
            },
            {
              question: "What keyword inherits current color?",
              type: "fill",
              starterCode: `color: ___;`,
              answer: "currentColor",
            },
            {
              question: "What is the short HEX form for #FF0000?",
              type: "fill",
              starterCode: `#___`,
              answer: "F00",
            },
          ],
        },
        {
          id: "css-default-values",
          title: "CSS Default Values",
          explanation: "CSS default values are the initial values browsers apply to elements when no CSS is specified. Understanding defaults helps predict element behavior and write more efficient CSS. Common defaults include display: block for div, display: inline for span, margin: 0 for most elements, padding: 0 for most elements, font-size: 16px (typically), and color: black (typically). CSS reset stylesheets normalize defaults across browsers.",
          syntax: "Default values vary by element:\ndiv: display: block\nspan: display: inline\nbody: margin: 8px (browsers vary)",
          examples: [
            {
              title: "CSS Default Values Example",
              description: "Common CSS default values",
              code: `/* Default display values */
div { display: block; } /* Default */
span { display: inline; } /* Default */
p { display: block; } /* Default */
a { display: inline; } /* Default */

/* Default margins */
body { margin: 8px; } /* Browser default, varies */
h1 { margin: 0.67em 0; } /* Default */
p { margin: 1em 0; } /* Default */

/* Default font */
body { 
  font-size: 16px; /* Typically */
  font-family: serif; /* Typically */
}

/* Default colors */
body { color: black; } /* Typically */
a { color: blue; } /* Default */

/* CSS Reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Normalize defaults */
html {
  font-size: 16px;
  line-height: 1.5;
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "What is the default display for div?",
              type: "fill",
              starterCode: `div { display: ___; }`,
              answer: "block",
            },
            {
              question: "What is the default display for span?",
              type: "fill",
              starterCode: `span { display: ___; }`,
              answer: "inline",
            },
            {
              question: "What normalizes defaults across browsers?",
              type: "predict",
              starterCode: `CSS reset stylesheets`,
              answer: "CSS reset or normalize stylesheets",
            },
          ],
        },
        {
          id: "css-browser-support",
          title: "CSS Browser Support",
          explanation: "CSS browser support refers to which CSS features work in different browsers. Modern browsers (Chrome, Firefox, Safari, Edge) generally support CSS3 features well. Older browsers may not support newer CSS features. Developers need to check browser compatibility when using advanced features. Tools like Can I Use help check feature support. Polyfills and fallbacks can add support for older browsers. Testing across browsers ensures websites work for all users.",
          syntax: "Check browser support before using CSS features\nUse feature detection (@supports) and fallbacks for older browsers",
          examples: [
            {
              title: "CSS Browser Support Example",
              description: "Understanding browser compatibility",
              code: `/* Modern browsers (good support) */
/* Chrome, Firefox, Safari, Edge */
.grid {
  display: grid; /* Well supported */
}

.flex {
  display: flex; /* Well supported */
}

/* Feature detection */
@supports (display: grid) {
  .container {
    display: grid;
  }
}

@supports not (display: grid) {
  .container {
    display: flex; /* Fallback */
  }
}

/* Vendor prefixes (older) */
.transition {
  -webkit-transition: all 0.3s;
  -moz-transition: all 0.3s;
  transition: all 0.3s;
}

/* Browser-specific */
/* Chrome/Safari */
@media (-webkit-min-device-pixel-ratio: 2) {
  .retina { }
}

/* Check compatibility */
/* Use caniuse.com for feature support */`,
            },
          ],
          practiceQuestions: [
            {
              question: "What does browser support refer to?",
              type: "predict",
              starterCode: `Which CSS features work in browsers`,
              answer: "Which CSS features work in different browsers",
            },
            {
              question: "What can add support for older browsers?",
              type: "fill",
              starterCode: `Use ___ for older browsers`,
              answer: "polyfills",
            },
            {
              question: "What rule checks feature support?",
              type: "fill",
              starterCode: `@___ (display: grid) { }`,
              answer: "supports",
            },
          ],
        },
      ],
    },
  ],
}

