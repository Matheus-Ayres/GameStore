<template>
    <main class="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 class="text-4xl font-bold mb-8">Login Page</h1>
        <form class="bg-white p-6 rounded shadow-md w-full max-w-sm">
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                    Username
                </label>
                <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="username"
                    type="text"
                    placeholder="Enter your username"
                />
            </div>
            <div class="mb-6">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                    Password
                </label>
                <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                />
            </div>
            <div class="flex items-center justify-between">
                <button
                    class="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="button"
                >
                    Login
                </button>
            </div>
        </form>
        
    </main>
</template>