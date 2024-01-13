export type Tasks = {
    id: string,
    title: string,
    // bisa pakai enum / union string (memastikan type datanya sama itu2 aja)
    // category: "" | ""
    category: string //-->cara mudahnya
}