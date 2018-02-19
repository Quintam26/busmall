const settingsForm = document.getElementById('settings-form');
settingsForm.addEventListener('submit', function () {
    event.preventDefault();
    const numProduct = this['num-product'].value;
    const numRounds = this['num-rounds'].value;

    const settings = {numProduct: numProduct, numRounds: numRounds};
    localStorage.setItem('settings', JSON.stringify(settings));
    JSON.parse(localStorage.getItem('settings'));

    const settings2 = JSON.parse(localStorage.getItem('settings'));
    parseInt(settings.Product);
    console.log(settings2);


});