<!--.vitepress/theme/MissionStatement.vue-->
<script setup lang="ts">
const props = defineProps(['lang']);
</script>

<template>
    <div class="tt">
        <span class="line">{</span>
        <span v-for="{key, lines, comma} of mission">
        <span class="line">&nbsp;"<b>{{ key }}</b>": [ </span>
        <span v-for="{line, comma} of lines">
        <span class="line">&nbsp;&nbsp;"<span class="intxt">{{ line }}</span>"<span v-if="comma">,</span></span>
        </span>
        <span class="line">&nbsp;]<span v-if="comma">,</span></span>
        </span>
        <span class="line">}</span>
    </div>

</template>

<style scoped>

.tt {
  font-family: 'Source Code Pro', 'Courier New', Courier, monospace;
  font-size: large;
  font-weight: 400;
  padding: 1em;
}

.tt b {
    font-weight: 900;
}

.dark .tt {
    background-color: #10161c;
}
.dark .tt b {
    color: #6289b6;
}

.dark .tt .intxt {
    color: #f6ee98;
}

html:not(.dark) .tt {
    background-color: #f9faf7;
}
html:not(.dark) .tt b {
    color: #0a2646;
}

html:not(.dark) .tt .intxt {
    color: #514b0a;
    font-weight: 400;
}


.tt .line {
    display: block;
}

</style>

<script lang="ts">
import missions from '../../src/mission.json';

interface Line {
    line: string,
    comma?: boolean,
};

interface Head {
    key: string;
    lines: Line[];
    comma?: boolean;
};

export default {
    computed: {
        mission() {
            const m = missions[this.lang] || missions['en'];
            const cooked: Head[] = [];
            for (const key of Object.keys(m)) {
                const lines: Line[] = [];
                for (const line of m[key]) {
                    lines.push({ line, comma: true });
                }
                lines[lines.length - 1].comma = false; // no last comma
                // now the main comma
                const comma = (Object.keys(cooked).length + 1) < Object.keys(m).length;
                cooked.push({ key, lines, comma });
            }
            return cooked;
        },
    },
}

</script>
