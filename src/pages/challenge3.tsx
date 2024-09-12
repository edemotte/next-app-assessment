import { useEffect } from 'react';

const Challenge = () => {

  const twoSum = (numbers: number[], target: number): number[] | undefined => {
    let left = 0;
    let right = numbers.length - 1;

    while (left < right) {
      const sum = numbers[left] + numbers[right];
      if (sum === target) {
        return [left + 1, right + 1];
      } else if (sum < target) {
        left++;
      } else {
        right--;
      }
    }

    return undefined;
  };

  useEffect(() => {
    // const numbers = [2, 7, 11, 15];
    // const target = 9;
   
    // const result = twoSum(numbers, target);
    // console.log( result);

    console.log(twoSum([4, 11, 17, 25], 21));
    console.log(twoSum([0, 1, 2, 2, 3, 5], 4));
    console.log(twoSum([-1, 0], -1));
    
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Check Console for Output</h2>
    </div>
  );
};

export default Challenge;

