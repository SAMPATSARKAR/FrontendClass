async function run() {
    try {
        const module = await import('./dynamicmath.js');
        console.log(module.add(2, 3)); // Output: 5
    } catch (error) {
        console.error('Error loading module:', error);
    }
}

run();
