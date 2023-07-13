// Example: Gallery data
const galleryData = [
  { image: 'image1.jpeg', title: 'photo' },
  { image: 'image2.jpg', title: 'Image 2' },
  { image: 'image3.jpg', title: 'Image 3' },
  // Add more gallery items as needed
];

// Example: Display gallery items
const galleryContainer = document.getElementById('gallery-container');
galleryContainer.innerHTML = '';

for (const item of galleryData) {
  const galleryItem = document.createElement('div');
  galleryItem.innerHTML = `
    <img src="gallery/${item.image}" alt="${item.title}">
    <div>${item.title}</div>
  `;
  galleryContainer.appendChild(galleryItem);
}
