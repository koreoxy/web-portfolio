import Layout from '../../components/Layout';

const Home = () => {
  return (
    <Layout>
      <div className="px-10">
        <h1 className="font-bold text-[20px]">About Me</h1>
        <hr class="w-auto h-1 mx-auto md:my-1"></hr>
        <div className="py-2">
          <h1>Hi there!👋</h1>
          <p>
            My name is <b>Saifullah</b>. you can call me Iful or ipul. I&apos;m
            currently 21 years old. Born and live in Meulaboh, Aceh Barat,
            Indonesia. I&apos;m currently a student at Teuku Umar University.I
            started learn about programmer since 2020 with c++ language. But for
            now I spend more time to explore about web development using Next.js
            and Laravel.
          </p>
        </div>
        <hr class="w-auto h-1 mx-auto md:my-1"></hr>

        <di className="">
          <h1 className="font-bold text-[20px]">Skillset</h1>
          <div className="grid grid-cols-3 gap-4 pt-3">
            <div className="border border-white p-3 transform transition duration-500 hover:-translate-y-2 hover:bg-[#3a2d2d]">
              <h1 className="font-bold text-lg">Languages</h1>
              <ul>
                <li>HTML & CSS</li>
                <li>C++</li>
                <li>JavaScript</li>
                <li>PHP</li>
                <li>Python</li>
              </ul>
            </div>

            <div className="border border-white p-3 transform transition duration-500 hover:-translate-y-2 hover:bg-[#3a2d2d]">
              <h1 className="font-bold text-lg">Framework / Frontend</h1>
              <ul>
                <li>Tailwind CSS</li>
                <li>Next.js</li>
                <li>Laravel</li>
                <li>React</li>
              </ul>
            </div>

            <div className="border border-white p-3 transform transition duration-500 hover:-translate-y-2 hover:bg-[#3a2d2d]">
              <h1 className="font-bold text-lg">Backend</h1>
              <ul>
                <li>MongoDB</li>
                <li>Mysql</li>
                <li>Node.js</li>
              </ul>
            </div>

            <div className="border border-white p-3 transform transition duration-500 hover:-translate-y-2 hover:bg-[#3a2d2d]">
              <h1 className="font-bold text-lg">Application</h1>
              <ul>
                <li>Figma</li>
                <li>Photoshop</li>
                <li>After Effect</li>
                <li>Premiere</li>
                <li>Blender</li>
              </ul>
            </div>
          </div>
        </di>
      </div>
    </Layout>
  );
};

export default Home;
