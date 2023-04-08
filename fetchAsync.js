const process = async () => {
    const data = await fetch('https://api.github.com/users/Shivraj1906');
    const parsed = data.json();

    console.log(data)
}

process();
console.log('Foo')