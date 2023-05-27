import { Suspense } from "solid-js";
import {
  Html,
  Head,
  Title,
  Meta,
  Link,
  Body,
  Routes,
  FileRoutes,
  Scripts,
  ErrorBoundary,
} from "solid-start";
import Navbar from "./components/Navbar";
import "./root.css";

export default function Root() {

  return (
    <Html>
      <Head>
        <Title>Pieces</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta name="description" content="Find your gem" />
        <Link rel="manifest" href="/manifest.webmanifest" />
        <Link
          href="https://fonts.googleapis.com/css?family=Abril+Fatface"
          rel="stylesheet"
        />
        {/* Had to add other google fonts in order to work */}
        {/* Despite adding tailwind.config */}
        <Link
          href="https://fonts.googleapis.com/css?family=Raleway"
          rel="stylesheet"
        />
         <Link
          href="https://fonts.googleapis.com/css?family=Poppins"
          rel="stylesheet"
        />
         <Link
          href="https://fonts.googleapis.com/css?family=EB+Garamond"
          rel="stylesheet"
        />
        <Link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet"/>
      </Head>
      <Body>
        <Suspense>
          <ErrorBoundary>            
            <Navbar />
              <Routes>
                <FileRoutes />
              </Routes>
          </ErrorBoundary>
        </Suspense>
        {/* This one line "scripts" voided my styling when deleted*/}
        <Scripts />
      </Body>
    </Html>
  );
}
