import { ComponentProps } from "react"

type code = {
	method : string
} & ComponentProps<"code">

export default function Code({ method, ...props } : code) {
	return (
		<>
			<code {...props} className="hljs inline-block text-sm text-neutral-300">
					<span className="hljs-keyword">const</span>{" "}<span className="hljs-title function_">fetchData</span> ={" "}<span className="hljs-keyword">async</span> (<span className="hljs-params"></span>) =&gt; {"{"}<br />
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="hljs-keyword">const</span> URL ={" "}<span className="hljs-string">Your URL</span>;<br />
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="hljs-keyword">const</span> response ={" "}
					<span className="hljs-keyword">await</span>{" "}<span className="hljs-title function_">fetch</span>(url);<br />
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="hljs-keyword">const</span> data ={" "}<span className="hljs-keyword">await</span> response.<span className="hljs-title function_">json</span>();<br />
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="hljs-keyword">return</span> data;<br />
					{"}"};
			</code>
		</>
	)
}
