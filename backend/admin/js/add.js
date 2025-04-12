document.addEventListener('DOMContentLoaded', function() {
    const uploadArea = document.getElementById('uploadArea');
    const fileInput = document.getElementById('flowerImage');
    const form = document.getElementById('addFlowerForm');
     // Handle image upload display
    uploadArea.addEventListener('click', () => fileInput.click());
    fileInput.addEventListener('change', function(e) {
        if (e.target.files.length) {
            const fileName = e.target.files[0].name;
            uploadArea.innerHTML = `<span>${fileName}</span>`;
        }
    });   
    // Form submission
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        // Here you would typically send data to your backend
        alert('Flower added successfully!');
        form.reset();
        uploadArea.innerHTML = '<span>Click to upload image</span>';
    });
});