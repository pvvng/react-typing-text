import{j as r}from"./jsx-runtime-CB0wZmbV.js";import{r as n,e as Y,a as H,b as N}from"./iframe-CjzziIAx.js";const S=n.forwardRef(({text:t,autoScroll:o=!0,startDelay:e=0,interval:i=60,loop:f=!1,loopDelay:h=1e3,className:L,style:z,cursor:d,onTypingStart:a,onType:x,onTypingEnd:l},$)=>{const[B,T]=n.useState(""),[u,b]=n.useState(0),C=n.useRef(null),s=n.useRef(!0),v=()=>{T(""),b(0)};return n.useEffect(()=>{d&&d.type!=="span"&&console.warn("cursor must be a <span> element.")},[d]),n.useEffect(()=>{v(),s.current=!0;const c=setTimeout(()=>{s.current=!1,a==null||a()},e);return()=>clearTimeout(c)},[t]),n.useEffect(()=>{const c=()=>(f&&(s.current=!0,setTimeout(()=>{v(),a==null||a(),s.current=!1},h)),s.current=!0,l==null?void 0:l()),M=setInterval(()=>{if(s.current)return;if(u>=t.length)return c();const R=t[u];x==null||x(R,u),T(_=>_+R),b(_=>_+1)},i);return()=>clearInterval(M)},[t,u,f,i,l]),n.useEffect(()=>{var c;o&&((c=C.current)==null||c.scrollIntoView({behavior:"smooth",block:"end"}))},[u]),n.useImperativeHandle($,()=>({pause:()=>{s.current=!0},resume:()=>{u<t.length&&(s.current=!1)},reset:()=>{v(),s.current=!1,a==null||a()},skip:()=>{T(t),b(t.length),l==null||l(),s.current=!0}})),r.jsxs("p",{className:L,style:{whiteSpace:"pre-line",wordBreak:"normal",...z},children:[B,d!==null&&d,r.jsx("span",{ref:C,style:{display:"inline-block",height:0,marginTop:1}})]})});S.__docgenInfo={description:"",methods:[{name:"pause",docblock:null,modifiers:[],params:[],returns:null},{name:"resume",docblock:null,modifiers:[],params:[],returns:null},{name:"reset",docblock:null,modifiers:[],params:[],returns:null},{name:"skip",docblock:null,modifiers:[],params:[],returns:null}],displayName:"TypingText",props:{text:{required:!0,tsType:{name:"string"},description:""},autoScroll:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},startDelay:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},interval:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"60",computed:!1}},loop:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},loopDelay:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"1000",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},cursor:{required:!1,tsType:{name:"union",raw:'React.ReactElement<"span"> | null',elements:[{name:"ReactReactElement",raw:'React.ReactElement<"span">',elements:[{name:"literal",value:'"span"'}]},{name:"null"}]},description:"Custom cursor element. Must be a <span> if you want default styles and auto-scroll to work correctly.\nSet to `null` to disable the cursor."},onTypingStart:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onType:{required:!1,tsType:{name:"signature",type:"function",raw:"(char: string, index: number) => void",signature:{arguments:[{type:{name:"string"},name:"char"},{type:{name:"number"},name:"index"}],return:{name:"void"}}},description:""},onTypingEnd:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const W=({width:t="2px",height:o="1rem",marginLeft:e="4px",cursorColor:i="black"})=>r.jsx("span",{style:{display:"inline-block",verticalAlign:"middle",width:t,height:o,marginLeft:e,backgroundColor:i}});W.__docgenInfo={description:"",methods:[],displayName:"DefaultCursor",props:{width:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"2px"',computed:!1}},height:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"1rem"',computed:!1}},cursorColor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"black"',computed:!1}},marginLeft:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"4px"',computed:!1}}}};const{normalizeProjectAnnotations:J,composeConfigs:Q,getCoreAnnotations:X}=__STORYBOOK_MODULE_PREVIEW_API__,{global:F}=__STORYBOOK_MODULE_GLOBAL__,{composeConfigs:K,setDefaultProjectAnnotations:Z,setProjectAnnotations:ee,composeStory:te,composeStories:ne}=__STORYBOOK_MODULE_PREVIEW_API__;var{window:k}=F;k&&(k.STORYBOOK_ENV="react");K([Y,H,{renderToCanvas:async(t,o)=>{if(t.storyContext.testingLibraryRender==null)return N(t,o);let{storyContext:{context:e,unboundStoryFn:i,testingLibraryRender:f}}=t,{unmount:h}=f(n.createElement(i,{...e}),{container:e.canvasElement});return h}}]);var w;typeof module<"u"&&((w=module==null?void 0:module.hot)==null||w.decline());const{action:p}=__STORYBOOK_MODULE_ACTIONS__,re={title:"Examples/TypingTextExample",component:S,tags:["autodocs"],parameters:{docs:{description:{component:"A lightweight and fully customizable typing animation component for React."}}}},y={args:{text:"Hello React Typing Text!",interval:60,loop:!0,startDelay:200,autoScroll:!1,cursor:r.jsx(W,{height:"18px"}),style:{fontSize:18,fontWeight:600},onType:p("onType"),onTypingStart:p("onTypingStart"),onTypingEnd:p("onTypingEnd")},parameters:{docs:{description:{story:"The default configuration with looping enabled and a custom cursor component."}}}},g={args:{text:"Typing with a little sparkle...",interval:80,autoScroll:!1,loop:!0,loopDelay:500,cursor:r.jsx("span",{style:{marginLeft:"4px",color:"#facc15"},children:"✨"}),style:{fontFamily:"'Fira Code', monospace",fontSize:"1.2rem",lineHeight:"1.8",textShadow:"1px 1px 2px rgba(250, 204, 21, 0.3)"}},parameters:{docs:{description:{story:"A styled version of TypingText with a sparkle ✨ cursor and a code-like font."}}}},m=function(){const o=n.useRef(null);return r.jsxs("div",{children:[r.jsx(S,{ref:o,text:"You can control the typing with buttons!",interval:100,autoScroll:!1,onType:(e,i)=>{p("onType")(`${e} (${i})`)},style:{fontSize:18,fontWeight:600},onTypingStart:p("onTypingStart"),onTypingEnd:p("onTypingEnd")}),r.jsxs("div",{style:{display:"flex",gap:"10px",marginTop:"1rem"},children:[r.jsx("button",{onClick:()=>{var e;return(e=o.current)==null?void 0:e.pause()},children:"Pause"}),r.jsx("button",{onClick:()=>{var e;return(e=o.current)==null?void 0:e.resume()},children:"Resume"}),r.jsx("button",{onClick:()=>{var e;return(e=o.current)==null?void 0:e.reset()},children:"Reset"}),r.jsx("button",{onClick:()=>{var e;return(e=o.current)==null?void 0:e.skip()},children:"Skip"})]})]})};m.__docgenInfo={description:"",methods:[],displayName:"WithRefControl"};var E,O,j;y.parameters={...y.parameters,docs:{...(E=y.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    text: "Hello React Typing Text!",
    interval: 60,
    loop: true,
    startDelay: 200,
    autoScroll: false,
    cursor: <DefaultCursor height="18px" />,
    style: {
      fontSize: 18,
      fontWeight: 600
    },
    onType: action("onType"),
    onTypingStart: action("onTypingStart"),
    onTypingEnd: action("onTypingEnd")
  },
  parameters: {
    docs: {
      description: {
        story: "The default configuration with looping enabled and a custom cursor component."
      }
    }
  }
}`,...(j=(O=y.parameters)==null?void 0:O.docs)==null?void 0:j.source}}};var q,D,A;g.parameters={...g.parameters,docs:{...(q=g.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    text: "Typing with a little sparkle...",
    interval: 80,
    autoScroll: false,
    loop: true,
    loopDelay: 500,
    cursor: <span style={{
      marginLeft: "4px",
      color: "#facc15"
    }}>✨</span>,
    style: {
      fontFamily: "'Fira Code', monospace",
      fontSize: "1.2rem",
      lineHeight: "1.8",
      textShadow: "1px 1px 2px rgba(250, 204, 21, 0.3)"
    }
  },
  parameters: {
    docs: {
      description: {
        story: "A styled version of TypingText with a sparkle ✨ cursor and a code-like font."
      }
    }
  }
}`,...(A=(D=g.parameters)==null?void 0:D.docs)==null?void 0:A.source}}};var I,P,V;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`function MyComponent() {
  const ref = useRef<TypingTextHandle>(null);
  return <div>
      <TypingText ref={ref} text="You can control the typing with buttons!" interval={100} autoScroll={false} onType={(char, index) => {
      action("onType")(\`\${char} (\${index})\`);
    }} style={{
      fontSize: 18,
      fontWeight: 600
    }} onTypingStart={action("onTypingStart")} onTypingEnd={action("onTypingEnd")} />
      <div style={{
      display: "flex",
      gap: "10px",
      marginTop: "1rem"
    }}>
        <button onClick={() => ref.current?.pause()}>Pause</button>
        <button onClick={() => ref.current?.resume()}>Resume</button>
        <button onClick={() => ref.current?.reset()}>Reset</button>
        <button onClick={() => ref.current?.skip()}>Skip</button>
      </div>
    </div>;
}`,...(V=(P=m.parameters)==null?void 0:P.docs)==null?void 0:V.source}}};const oe=["Default","WithCustomStyle","WithRefControl"];export{y as Default,g as WithCustomStyle,m as WithRefControl,oe as __namedExportsOrder,re as default};
