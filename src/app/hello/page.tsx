export default async function Page() {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return <div>this is hello pageかもしれないね!</div>
}