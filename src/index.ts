// src/index.ts
/**
 * Main entry point for ArtificialMasteryGenerator
 */

import { ArtificialMasteryGenerator } from './artificialmasterygenerator';
import minimist from 'minimist';

interface Args {
    verbose?: boolean;
    input?: string;
    output?: string;
}

const args: Args = minimist(process.argv.slice(2), {
    boolean: ['verbose'],
    alias: {
        v: 'verbose',
        i: 'input',
        o: 'output'
    }
});

const app = new ArtificialMasteryGenerator({
    verbose: args.verbose
});

app.execute()
    .catch(err => {
        console.error(err);
        process.exit(1);
    });
