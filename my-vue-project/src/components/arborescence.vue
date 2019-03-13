<template>
  <div class="main">
    <ul id="demo" v-for="(data, index) in treeData" :key="index">
      <li>
        <div
          :class="{bold: isFolder(data)}"
          @click="toggle(index)"
          ><!-- @dblclick="changeType" -->
          {{data.name}}
          <span v-if="isFolder(data)">[{{data.open ? '-' : '+'}}]</span>
        </div>
        <ul v-show="data.open" v-if="isFolder(data)" v-for="(child, childIndex) in data.children" :key="childIndex">
          <li>
            <div> <!-- :class="{bold: isFolder(child)}"
              @click="toggle"
              @dblclick="changeType" <span v-if="isFolder(child)">[{{open ? '-' : '+'}}]</span>-->
              {{child.name}}
            </div>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  name: 'arborescence',
  data () {
    return {
      treeData: [{
        name: 'My Tree',
        children: [
          { name: 'hello' },
          { name: 'wat' }
        ],
        open: false
      },
      {
        name: 'Second Tree',
        children: [
          { name: 'A1' },
          { name: 'A2' }
        ],
        open: false
      }]
    }
  },
  methods: {
    toggle (index) {
      if (this.isFolder(this.treeData[index])) {
        this.treeData[index].open = !this.treeData[index].open
      }
    },
    changeType () {
      if (!this.isFolder) {
        Vue.set(this.model, 'children', [])
        this.addChild()
        this.treeData[0].open = true
      }
    },
    addChild () {
      this.model.children.push({
        name: 'new stuff'
      })
    },
    isFolder (data) {
      return data.children && data.children.length
    }
  }
}
</script>

<style scoped>
  body {
  font-family: Menlo, Consolas, monospace;
  color: #444;
}
.item {
  cursor: pointer;
}
.bold {
  font-weight: bold;
}
ul {
  padding-left: 1em;
  line-height: 1.5em;
  list-style-type: dot;
}
</style>
