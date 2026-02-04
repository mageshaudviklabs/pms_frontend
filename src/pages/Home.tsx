import React from 'react';

const Home: React.FC = () => {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-slate-900 text-slate-100">
            <h1 className="mb-4 text-4xl font-bold text-cyan-400">PMS Home</h1>
            <p className="text-lg text-slate-300">
                Welcome to the Hiro PMS home page
            </p>
        </div>
    );
};

export default Home;
