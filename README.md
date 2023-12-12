<h1>ReactComponents<h1>
<br>
<h5>GithubRepoMapper<h5>
<h7>Example<h7>

<pre>
<code>
<p>
  &lt;GithubRepoMapper<br />
  &nbsp;username={"AudunKodehode"}<br />
  &nbsp;headerText={"Github Repos"}<br />
  /&gt;
</p>
<br>
</code>
</pre>

<h5>Accordion<h5>
<h7>Example<h7>
<b><p>react-icons is used</p></b>

<pre>
<code>
&lt;Accordion
  title="Accordion 1"
  className="accordion-1"
  closedIcon=&#123;&lt;RiArrowDownSLine />&#125;
  openIcon=&#123;&lt;RiArrowRightSLine />&#125;
&gt;
  &lt;p&gt;Content&lt;/p&gt;
&lt;/Accordion&gt;
</code>
</pre>

<h5>SimpleFetch<h5>
<h7>Example<h7>
<pre>
<code>
&lt;SimpleFetch
  url="https://v2.jokeapi.dev/joke/Any"         // URL FOR FETCH *REQUIRED*
  debug                                         // ENABLES CONSOLE OUTPUT
  className={"simple-fetch"}                    // DIV CLASSNAME
  buttonText="Fetch"                            // BUTTON TEXT TO REFRESH FETCH
  data={["category", "delivery", "lang"]}       // ARRAY SPECIFICATION
&gt;
</code>
</pre>

