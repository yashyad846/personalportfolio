const downloadBlock = document.getElementById('downloadBlock');

downloadBlock.addEventListener('click', () => {
  // Replace 'path/to/your/file.pdf' with the actual path to your file
  const fileURL = 'project2learn.pdf';

  // Create a temporary anchor element
  const link = document.createElement('a');
  link.href = fileURL;
  link.download = 'project2learn.pdf'; // The suggested filename for the download

  // Append the anchor element to the document
  document.body.appendChild(link);

  // Simulate a click on the anchor element to trigger the download
  link.click();

  // Remove the temporary anchor element from the document
  document.body.removeChild(link);
});
