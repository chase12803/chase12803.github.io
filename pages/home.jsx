import Name from '../src/components/Name';
import NavBar from '../src/components/NavBar';

const Home = () => (
    <div>
        <section className="relative flex bg-gradient-to-r from-fuchsia-500 to-pink-500
                            h-screen w-auto">
            <NavBar />
            <Name />
        </section>
    </div>
);

export default Home