export async function fileToBase64(file: File): Promise<string> {
  // const fileReader = new FileReader();
  // fileReader.readAsArrayBuffer(file);
  // let arrayBuffer;
  // fileReader.onload = function () {
  //   arrayBuffer = fileReader.result;
  // };
  // if (!arrayBuffer) {
  //   throw new Error();
  // }
  // const base64 = Buffer.from(arrayBuffer).toString("base64");
  // return base64;

  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = reject;
  });
}
