import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import React from "react";

import { WhatLEADCard } from "../WhatLEADCard";

const imgData = {
  localFile: {
    childImageSharp: {
      gatsbyImageData: {
        layout: "constrained",
        placeholder: {
          fallback:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFXElEQVR42k1UWVCTZxRNH/rmkzPOZEZHqyNIEgKRGKBJCDsREpYEwurCvoTVyiYhIgRwAMGloqBGCqIgiwpiFUkkkEBYIgIii1q7vbRv+tBB2j89/RLE+s+c+f7/zvefe+499/toNPK4OPEc2c6CLjZD6E/79LCZQgWbyW9nMnn0rZiLo/teNlPQzWJ9K92KsVieoS4swR02W7hvK0bjsIRKDsvrGsfZW70Vc2V7V3Jd/S+4ufrJ/v+ZH8NxFl3jugaoPidhCqpdGMJWkjzxM6HTfq6acYDXxHTyqNu+3WEnnc7Y4+TIq3dmCuqcGfxM+jb6Djp9/44DDtxcsqfBlSWs3bVr187du9n7GI7u51gHPJpYDI/8T0pEDT4COUR82bq7m3jdRxj5XiSQffAVRn30PBTy0ZN3+C8RP+K90DOUIGxd4CHdOMQJsK3vCT6Q+IY7V7x+iOMPV5ZIReO5BRpSj6ghl2RRfl4KJMercTzmlB0BohiEilNwVFGCOPl3iCWQBibBmy+DIjwP8tBsyKVKeAtklD/Zy+MEDNLc3QJHEuNKEeQbRynCcpAUV4bkOBUUYdmEMBrx8pNIiCpCQmQhYiLy4esVhfDgVEST96iwXEiCSAKBnAoPSQfXxaeHxnX100WF5iA2vICKkuZAFpyFcHEmQQZkIUqiMJ2oSoUkMMUO23tIQDKC/ROJiGMQb4IK8kkgJXv10ty5gTplWhlyM8up3KxyKNNO2ZGTqSJrKbJSS5GdUWaPpScVIz25GGlJRUhNLLSvaSSWkVJMpRwrhJuLby/NTyTXmY0rmBxfooYemDAzuQbz+DKG7ptg0L3A1MQqhoem8eTRNIyGlxgffUlia5idekv2viF7FjCmX6Qe3jND4BHaS/P1itBNjC2h4+ZDKjfzNAz6eYw8nkVWigrt2kGYCWFF2SXUVF7FjHkNT4amcKmxE5qKy2g4q8XdzhEYR5eovm4D+DxpL83fW64bIySLc++opYVfYSIqbAkW537BlGnFrtKgm8c0UX79aj+i5UrERubjeGwJcT0fYcHJqCy/+KVCmc5sspU4TjXVtdnJRkdeoL5aiwd9hs0EpAUtl+8SUxKhKb+Ji3X3oUzRoKL0OipKtIgISaMyk1W2qdjsoa1vA/0GquZMi62XRNEcqtTN6OvWY5qU/Ozpc8REKlGn6cCVCwM4V92FCEkaivPOQ1PWjtrTnWRs0sBw4PXSAn0VOiNp9MrS79RPr/8kZb4iJMt4s/KH3aBZ82tSai8yiIJb2hFcbOjBlfODpOw8lBc1o0bdgaqydqoo7wJcGPxNhbafem4PU4X5tTATwjH9CxRkV6Hr1mMszf+Gs1UtKD7RgK52Hdpaf0S9pp3M4VFUqW7Y1RJSSnWyBbyDATZTosjYLMM0tkAN9I8SJ1fJWCzjXo8e+uFZYs7POF//Awrz6jDQN4Gaihtk2I+j9EQTvm+4Zyc8V939j7q4FeSQaO2ENiMs02uUybBA3Fy2w/hsHrZvy9QqMWcU8dG5/w72m0jJnQRduHXjKS439aGxtgvNjYMbytQq7N3tfMRW8vDczFv03Bn+Oy9LYyVkVpNh0ZqdfsZKYta5mdfWudm31sKCGmtBjsb69NGs9e5tnbXt2pBVe/UR1dY6vHG2sgNenqFGcnl9TRQq9KbRJcw/f0fNTK7ChumJFdjaMEXGadL4CpOkgomxV+T4qcnxOwVtywAx6DGuNw9YS040gu8eMkenf7PHfh8eZHkfDfJTLErEcbMScaxFIo63BJP1SxwOirFIJQkWaXCCxWEv9zmXE2Dx9460CDxCnuzbw8kiNNs+3dVf/Qcus2Jn29zRVQAAAABJRU5ErkJggg==",
        },
        images: {
          fallback: {
            src: "/static/91349cee7c95b625cacdfe0bf8b31010/69237/Idea_to_concept_f9680973c6.png",
            srcSet:
              "/static/91349cee7c95b625cacdfe0bf8b31010/86ee2/Idea_to_concept_f9680973c6.png 13w,\n/static/91349cee7c95b625cacdfe0bf8b31010/996d8/Idea_to_concept_f9680973c6.png 26w,\n/static/91349cee7c95b625cacdfe0bf8b31010/69237/Idea_to_concept_f9680973c6.png 52w",
            sizes: "(min-width: 52px) 52px, 100vw",
          },
          sources: [],
        },
        width: 52,
        height: 52,
      },
    },
  },
};

describe("Test if the WhatLEADCard component is working as expected", () => {
  it("<WhatLEADCard /> matches snapshot", () => {
    const component = render(
      <WhatLEADCard
        title={"Time Boxed Accelerated Execution"}
        img={imgData}
        subText={
          "In our experience, it’s not always important to protect an idea. It’s important to protect the time it takes to make it real."
        }
      />
    );
    expect(component.container).toMatchSnapshot();
  });

  it("<WhatLEADCard /> renders without exploding", () => {
    const component = render(
      <WhatLEADCard
        title={"Time Boxed Accelerated Execution"}
        img={imgData}
        subText={
          "In our experience, it’s not always important to protect an idea. It’s important to protect the time it takes to make it real."
        }
      />
    );
    expect(component.getByTestId("what-lead-card")).toBeInTheDocument();
  });
});
