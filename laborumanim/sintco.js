function estimateBandwidth(array, f) {
  // Check if a transformation function is provided
  if (typeof f === 'function') {
    array = array.map(f);
  }

  // Calculate the mean of the array
  const mean = array.reduce((acc, val) => acc + val, 0) / array.length;

  // Calculate the variance
  const variance = array.reduce((acc, val) => acc + Math.pow(val - mean, 2), 0) / array.length;

  // Standard deviation is the square root of the variance
  const standardDeviation = Math.sqrt(variance);

  return standardDeviation;
}

// Example usage:
const exampleArray = [1, 2, 3, 4, 5];
const bandwidth = estimateBandwidth(exampleArray);
console.log('Estimated Bandwidth:', bandwidth);

// Using a transformation function
const transformedBandwidth = estimateBandwidth(exampleArray, x => x * 2);
console.log('Transformed Estimated Bandwidth:', transformedBandwidth);
