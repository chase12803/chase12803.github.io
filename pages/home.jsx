// Custom components
import Name from '../src/components/Name';
import NavBar from '../src/components/NavBar';

// Default home page
const Home = () => (
    <div>
        <section className="relative flex bg-gradient-to-r from-slate-500 to-slate-300
                            h-screen w-auto">
            <NavBar />
            <Name />
        </section>
    </div>
);

export default Home