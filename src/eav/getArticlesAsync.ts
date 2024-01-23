import fs from "fs/promises";
import path from "path";
import { cwd } from "process";
import { getTopicsAsync } from ".";


export async function getArticlesAsync(categorySlug: string, topicSlug: string) {

    
    const topics = await getTopicsAsync(categorySlug);
    const topic = topics.find(x => x.topic === topicSlug)!;
    const folder = topic.path;//.resolve(cwd(), `./docs/${category}/${topic?.order}-${topic?.topic}`);
    const entries = await fs.readdir(folder);
    const folders = await Promise.all(entries.map(async (entry) => {

        let filePath = path.join(folder, entry);
        let stat = await fs.stat(filePath);

        return [filePath, stat] as [string, typeof stat];


    }));

    return folders.filter(([_, stat]) => !stat.isDirectory())
        .map(([filepath]) => {
            const filename = path.parse(filepath).name;

            return {
                article: filename.substring(filename.indexOf('-') + 1),
                order: filename.substring(0, filename.indexOf('-')),
                path: filepath,
            }
        });


}

 