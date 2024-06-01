import Links from "@/components/links";

export default function Home() {
  return (
    <div className="font-base">
      <h1 className="text-2xl font-heading sm:text-4xl">Teddy <a className="text-mainAccent">Malhan</a></h1>
      <p className="mt-2 text-lg sm:text-xl">Software Engineer</p>
      <div className="mt-8 text-base sm:text-lg">
        <p>
          Hi, my name is Teddy Malhan, software engineer based in Burnaby, BC.
        </p>

        <br />

	<p>
	Explore my portfolio to find out more about me and my passion for software development or view my <a href="/resume.pdf" className="text-mainAccent">resume</a>
	</p>
      </div>

	<div class="flex flex-row justify-center items-center text-mainAccent">
	      <Links />
	</div>
    </div>
  );
}