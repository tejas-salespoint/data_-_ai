import { useEffect, useState } from 'react';

// Custom hook to extract unique use_cases fields from the given data
function useUniqueUseCases(data) {
  const [uniqueUseCases, setUniqueUseCases] = useState([]);

  useEffect(() => {
    const extractUniqueUseCases = () => {
      const uniqueUseCases = [];

      data.forEach((industry) => {
        if (industry.solution_plays) {
          industry.solution_plays.forEach((solutionPlay) => {
            if (solutionPlay.use_cases) {
              solutionPlay.use_cases.forEach((useCase) => {
                if (!uniqueUseCases.includes(useCase)) {
                  uniqueUseCases.push(useCase);
                }
              });
            }
          });
        }
      });

      setUniqueUseCases(uniqueUseCases);
    };

    extractUniqueUseCases();
  }, [data]);

  return uniqueUseCases;
}

export default useUniqueUseCases;
