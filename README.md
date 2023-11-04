This is a [Plasmo extension](https://docs.plasmo.com/) project bootstrapped with [`plasmo init`](https://www.npmjs.com/package/plasmo).

# AI Assistant Chrome Extension

This project is a Chrome extension that uses an AI model to generate responses based on user input. The extension is built with React and TypeScript, and the backend is built with Next.js and TypeScript.

## Project Structure

- `IndexPopup.tsx`: This is the main component of the Chrome extension. It includes an input field for the user to enter a command, a button to generate a response, and a text area to display the generated response.

## Setup

1. Clone the repository.
2. Install the dependencies with `npm install`.
3. Start the development server with `npm run dev`.

## Usage

1. Load the extension into Chrome.
2. Click on the extension icon to open the popup.
3. Enter a command in the input field.
4. Click the "Generate" button to generate a response.
5. The generated response will be displayed in the text area.

## API

The extension makes a request to a Next.js API running on `http://localhost:3000/api/generate`. The API uses the HuggingFace API to generate responses based on the command sent in the request.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## Getting Started

First, run the development server:

```bash
pnpm dev
# or
npm run dev
```

Open your browser and load the appropriate development build. For example, if you are developing for the chrome browser, using manifest v3, use: `build/chrome-mv3-dev`.

You can start editing the popup by modifying `popup.tsx`. It should auto-update as you make changes. To add an options page, simply add a `options.tsx` file to the root of the project, with a react component default exported. Likewise to add a content page, add a `content.ts` file to the root of the project, importing some module and do some logic, then reload the extension on your browser.

For further guidance, [visit our Documentation](https://docs.plasmo.com/)

## Making production build

Run the following:

```bash
pnpm build
# or
npm run build
```

This should create a production bundle for your extension, ready to be zipped and published to the stores.

## Submit to the webstores

The easiest way to deploy your Plasmo extension is to use the built-in [bpp](https://bpp.browser.market) GitHub action. Prior to using this action however, make sure to build your extension and upload the first version to the store to establish the basic credentials. Then, simply follow [this setup instruction](https://docs.plasmo.com/framework/workflows/submit) and you should be on your way for automated submission!



