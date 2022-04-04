#! /usr/bin/env node
import fetch from 'node-fetch';
import open from 'open';
import yargs from 'yargs';

const {argv} = yargs(process.argv)

const res = await fetch('https://reddit.com/.json');
const data = await res.json();
const children = data.data.children;
const randomPost = children[Math.floor(Math.random()*children.length)];

if(argv.print){
    console.log(`
                title:${randomPost.data.title}
                link:${randomPost.data.permalink}
            `);
} else{
    open(`https://reddit.com${randomPost.data.permalink}`);
}
//console.log(randomPost);