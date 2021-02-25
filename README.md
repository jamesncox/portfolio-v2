# About My Portfolio Site

www.jamescox.dev is the third iteration of my portfolio. Each version is a React single page application, but this is the first one that does not use a CSS framework.

The first version was built following a tutorial, and made use of IBM's Carbon Components, which was so unwieldy and an incredibly large package to include for such a simple project.

The second version I designed myself, this time using Material UI's components and design aesthetic. Material UI is a lot more intuitive, and definitely more light weight than Carbon Components, but there is no escaping that it looks very Material UI-ey, which means it looks like a lot of things on the web, as Google uses Material UI components for so many of its producsts.

This version is the first version to use only CSS and the first one that is "single page" style, with smooth scrolling and no "pages".

## Planning and Design

- I set out to re-design my portfolio site with only CSS (no libraries or frameworks). 

- My goal was to use a minimalist design, utilizing just a few fonts and colors.

- Using https://excalidraw.com/ I sketched a mockup, and I think I got very close to the original idea!

#### Design vs. Actual

![portfoli side by side](https://user-images.githubusercontent.com/47455758/109177973-fc0f9980-774d-11eb-9266-90bd1a0967e3.png)


I wanted a clean and simple aesthetic, and I believe I have achieved that.

## Achieved Desired Features

- Light/dark theme switch: **Achieved with CSS variables and a custom CSS checkbox styled as a toggle/switch**

- Smooth scrolling triggered by menu navbar: **Achieved with react-scroll, the only package in my portfolio**

- Lazy load images: **Achieved with a custom React hook called "ImageLoad" that takes small .png version, displays that until the larger version has loaded**

- Mini bio menu to select various lengths: **Achieved with useState to display selected bio length, short, medium, long or stalker**

- Collapsible components to display projects: **Achieved with custom CSS, using a checkbox to determine whether the component has been checked or not**

- Custom React hooks to display projects and blogs: **Very proud of this, having never built my own React hook before, I was able to create a hook each for projects and blog and they significantly cut down on the amount of code used to display each project or blog**

## In-Progress Desired Features 

- Preview image when portfolio site is linked to LinkedIn, Twitter, Facebook, etc.

- Turn the see "more projects" and "more blogs" buttons into a toggle that expands to show more projects and blog posts directly in each component.
