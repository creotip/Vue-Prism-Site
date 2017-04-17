<template>
  <div class="hello">
    <h1 class="titilium">
      <strong>Simple</strong> Vue.js Syntax highlighting with Prism.js
    </h1>
    <br>
    <br>


    <div class="wrap-code text-left">
      <h2>
        Example
      </h2>
      <pre><code class="language-js">
export default {
  name: 'hello',
  data () {
  return {
    msg: 'Welcome to Your Vue.js App'
    }
  }
}
        </code></pre>
    </div>
    <br>
    <br>
    <div class="text-left">
      <h2>
        Installation
      </h2>
      <pre style="background: #4c4c4c;
    color: #fff;"><code>
        npm install vue-prism --save-dev
      </code></pre>
      <pre><code class="language-js">
import Vue from 'vue'
import VuePrism from 'vue-prism'
Vue.use(VuePrism)
        </code></pre>
    </div>
    <br>
    <br>
    <div class="text-left">
      <h2>How to use</h2>
      <pre><code class="language-html">{{componentSnippet}}</code></pre>
    </div>

  </div>
</template>

<script>
  const componentSnippet = `
<button v-tooltip.top-center="msg">Hover me</button>
`
  export default {
    name: 'hello',
    data () {
      return {
        msg: 'Simple Vue.js Syntax highlighting with Prism.js',
        rawHtml: '<div> This is raw html</div>',
        componentSnippet
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
    font-size: 1.2rem;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
