## Your Client

A company has come to you, impressed by your portfolio. They would like you to build the first phase of a responsive web application for them with the potential to keep working with you if this phase goes well.

They intend to compete with the other major task platforms. They have a long term goal for a large, polished feature set. However, for this phase they are looking for a working, polished deliverable within their timeframe. 

There are a set of things that are important to them long term that should be considered from the beginning:
- It is free of defects that would hinder a smooth experience
- It can be used on all common device types (they've mentioned a PWA)
- It meets AA compliance of the [WCAG 2.1](https://www.w3.org/WAI/standards-guidelines/wcag/glance/) guidelines.
- It can be used cross device via login
- If not logged in, it can be used over a long period of time on that device

## Phase 1 Requirements

### Business Requirements

- A user can create, edit, delete, and mark a task complete.
- A user can see all incomplete tasks
- A user can see all details of a task
- The site must be responsive and work on a desktop, tablet, and current generation phone
- Follow the design and design language/brand. Where it isn't explicit, make a best guess. 
- Should meet AA compliance of the [WCAG 2.1](https://www.w3.org/WAI/standards-guidelines/wcag/glance/) guidelines.
- Go live is 2 weeks from the day you received the project. Have the project completed and submitted before then.


### Technical Requirements

- Data should be persisted if you refresh the browser. This could be to device storage, setup a firebase instance, or develop your own api with a database. Be sure to document your approach and how to test it.
- Each page that is routed to should be in it's own module and lazy loaded
- Supports the latest versions of Chrome and Safari, iPhone and Android
- Code should be built in a way that is scalable so the project can easily continue to the next phase.
- The application (pages, routing) should be handled in Angular where it makes sense
- The visuals of the app would preferably be built in stencil using either [web components](https://stenciljs.com/docs/component) or [functional components](https://stenciljs.com/docs/functional-components). If narrowing your focus to implementing everything in Angular helps you deliver, that is acceptable.


The client has provided you with the designs, style guide, and all assets needed to accomplish the task. 

## Your Codebase

You have a [Nx Monorepo](https://nx.dev/angular) template you use for most of your projects and you are planning to leverage it here. You've got much of the boilerplate ready to go.

However, this codebase has been pieced together over time with no clear architecture and is a hodgepodge of approaches. There is no guarantee that it's set up perfectly for this project. You're free to change any code in this repo. Show your coding style in this project. 


### Install Dependencies

```
yarn install
```

### [Stencil](https://stenciljs.com/docs/introduction) Library (`/libs/ui`)

```
yarn run ui:build

// or, to watch for file changes
yarn run ui:dev
```

After receiving the assets, you have already set up 

- font families (`fonts/font.css`)
- brand colors (`src/css/_theme.scss`)
- an svg icon component (`src/components/design-system/icon`)

### [Storybook](https://storybook.js.org/) (`/libs/ui/.storybook`)

```
yarn run ui:storybook
```

You've already built out a couple stories for the colors and icon sizes.


### [Angular](https://angular.io/) App (`/apps/web`)

```
yarn start web
``` 

Basically a new project, there's not much here.

You can delete: 
- the `hello.component` and it's reference in the `app.module`
- The `// Sample page css` in the `styles.scss` file
