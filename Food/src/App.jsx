import Cards from "./components/Cards";

const App = () => {
  return (
    <main className="w-screen h-auto bg-rose-100 container m-auto p-5">
      <section className="h-full w-full">
        <h1 className="text-3xl">Desserts</h1>
        <div className="flex justify-center items-center mt-7">
          <Cards />
        </div>
      </section>
    </main>
  );
};

export default App;
