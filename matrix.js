function spiralTraverse(matrix) {
    if (matrix.length === 0) {
      return [];
    }
  
    const result = [];
    let top = 0;
    let bottom = matrix.length - 1;
    let left = 0;
    let right = matrix[0].length - 1;
  
    while (top <= bottom && left <= right) {
      // Traverse top row
      for (let i = left; i <= right; i++) {
        result.push(matrix[top][i]);
      }
      top++;
  
      // Traverse right column
      for (let i = top; i <= bottom; i++) {
        result.push(matrix[i][right]);
      }
      right--;
  
      // Check if there are more rows and columns to traverse
      if (top <= bottom && left <= right) {
        // Traverse bottom row
        for (let i = right; i >= left; i--) {
          result.push(matrix[bottom][i]);
        }
        bottom--;
  
        // Traverse left column
        for (let i = bottom; i >= top; i--) {
          result.push(matrix[i][left]);
        }
        left++;
      }
    }
  
    return result;
  }
  
  // Example usage:
  const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  const result = spiralTraverse(matrix);
  console.log(result); // Output: [1, 2, 3, 6, 9, 8, 7, 4, 5]
  