import "./app2.css";
import $ from 'jquery'

const html = `
 <section id="app2">
        <ol class="tab-bar">
          <li>1</li>
          <li>2</li>
        </ol>
        <ol class="tab-content">
          <li>content1</li>
          <li>content2</li>
        </ol>
  </section>
`
const $element = $(html).appendTo($('body .page'))

const $tabBar = $('#app2 .tab-bar')
const $tabContent = $('#app2 .tab-content')

$tabBar.on('click', 'li', (e) => {
  const $li = $(e.currentTarget)
  $li.addClass('selected')
  .siblings().removeClass('selected')
  const index = $li.index()
  $tabContent.children().eq(index).addClass('active')
                        .siblings().removeClass('active')
})

$tabBar.children().eq(0).trigger('click')