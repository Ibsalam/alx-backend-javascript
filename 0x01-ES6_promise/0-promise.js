export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    const success = true; // Simulating a condition

    if (success) {
      resolve('API call succeeded');
    } else {
      reject(new Error('API call failed'));
    }
  });
}
