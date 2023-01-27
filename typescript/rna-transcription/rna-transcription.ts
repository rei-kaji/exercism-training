export function toRna(nucleotide: string): string {
  let nucleotideArray: string[] = nucleotide.split("");
  let newNucleotide: string = "";

  const rnaCollection = {
    G: "C",
    C: "G",
    T: "A",
    A: "U",
  };

  //   G -> C
  // C -> G
  // T -> A
  // A -> U

  for (let text of nucleotideArray) {
    switch (text) {
      case "G":
        newNucleotide += rnaCollection.G;
        break;
      case "C":
        newNucleotide += rnaCollection.C;
        break;
      case "A":
        newNucleotide += rnaCollection.A;
        break;
      case "T":
        newNucleotide += rnaCollection.T;
        break;
      default:
        throw Error("Invalid input DNA.");
    }
  }

  return newNucleotide;
}
