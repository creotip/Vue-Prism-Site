<template>
  <div class="hello">
    <h1 class="titilium">
      <strong>Simple</strong> Vue.js Syntax highlighting with Prism.js
    </h1>
    <!-- Place this tag where you want the button to render. -->
    <a class="gh-button" target="_blank" href="https://github.com/creotip/vue-prism"><span class="gh-button__icon"></span>Download</a>
    <br>
    <br>


    <div class="wrap-code text-left">
      <h2 class="titilium">
        Example
      </h2>
      <pre class="language-js"><code>
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
    color: #fff;padding: 1rem;"><code>npm install vue-prism --save-dev</code></pre>
      <br>
      <pre><code class="language-js">
// Main file
import Vue from 'vue'
import VuePrism from 'vue-prism'
Vue.use(VuePrism)

import 'prismjs/themes/prism.css'
        </code></pre>
    </div>
    <br>
    <br>
    <div class="text-left">
      <h2>How to use</h2>
      <p>Add class to the pre tag. <br>
        Place supported language code in the <strong>language-xxxx</strong> class:</p>
      <pre><code class="language-html">{{helloJS}}</code></pre>
      <pre><code class="language-html">{{helloCSS}}</code></pre>
      <br>
      <a target="_blank" href="http://prismjs.com/#languages-list">List of supported languages</a>
    </div>

    <br>
    <br>
    <br>


  </div>
</template>

<script>
  const buttonSnippet = `<button class="btn" @click="Submit">Click me!</button>`
  const helloJS = `<pre class="language-js">
  <code>
    export default {
      name: 'hello'
    }
  </code>
</pre>`
  const helloCSS = `<pre class="language-css">
  <code>
    .my-class {
      background-color: red;
      margin: 0;
    }
  </code>
</pre>`
  export default {
    name: 'hello',
    data () {
      return {
        rawHtml: '<div> This is raw html</div>',
        buttonSnippet,
        helloJS,
        helloCSS
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
    font-size: 1.2em;
    font-family: 'Titillium Web', sans-serif;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }


</style>
