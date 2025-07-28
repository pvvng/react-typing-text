import{j as r}from"./jsx-runtime-BDh8ueMN.js";import{r as n,e as H,a as F,b as K}from"./iframe-DNJKRllb.js";const _=n.forwardRef(({text:e,autoScroll:t=!0,startDelay:a=0,interval:l=60,loop:m=!1,loopDelay:h=1e3,className:W,style:Y,cursor:d,onTypingStart:s,onType:x,onTypingEnd:i},z)=>{const[$,T]=n.useState(""),[u,b]=n.useState(0),w=n.useRef(null),o=n.useRef(!0),v=()=>{T(""),b(0)};return n.useEffect(()=>{d&&d.type!=="span"&&console.warn("cursor must be a <span> element.")},[d]),n.useEffect(()=>{v(),o.current=!0;const c=setTimeout(()=>{o.current=!1,s==null||s()},a);return()=>clearTimeout(c)},[e]),n.useEffect(()=>{const c=()=>(m&&(o.current=!0,setTimeout(()=>{v(),s==null||s(),o.current=!1},h)),o.current=!0,i==null?void 0:i()),B=setInterval(()=>{if(o.current)return;if(u>=e.length)return c();const R=e[u];x==null||x(R,u),T(S=>S+R),b(S=>S+1)},l);return()=>clearInterval(B)},[e,u,m,l,i]),n.useEffect(()=>{var c;t&&((c=w.current)==null||c.scrollIntoView({behavior:"smooth",block:"end"}))},[u]),n.useImperativeHandle(z,()=>({pause:()=>{o.current=!0},resume:()=>{u<e.length&&(o.current=!1)},reset:()=>{v(),o.current=!1,s==null||s()},skip:()=>{T(e),b(e.length),i==null||i(),o.current=!0}})),r.jsxs("p",{className:W,style:{whiteSpace:"pre-line",wordBreak:"normal",...Y},children:[$,d!==null&&d,r.jsx("span",{ref:w,style:{display:"inline-block",height:0,marginTop:1}})]})});_.__docgenInfo={description:"",methods:[{name:"pause",docblock:null,modifiers:[],params:[],returns:null},{name:"resume",docblock:null,modifiers:[],params:[],returns:null},{name:"reset",docblock:null,modifiers:[],params:[],returns:null},{name:"skip",docblock:null,modifiers:[],params:[],returns:null}],displayName:"TypingText",props:{text:{required:!0,tsType:{name:"string"},description:""},autoScroll:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},startDelay:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},interval:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"60",computed:!1}},loop:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},loopDelay:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"1000",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},cursor:{required:!1,tsType:{name:"union",raw:'React.ReactElement<"span"> | null',elements:[{name:"ReactReactElement",raw:'React.ReactElement<"span">',elements:[{name:"literal",value:'"span"'}]},{name:"null"}]},description:"Custom cursor element. Must be a <span> if you want default styles and auto-scroll to work correctly.\nSet to `null` to disable the cursor."},onTypingStart:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onType:{required:!1,tsType:{name:"signature",type:"function",raw:"(char: string, index: number) => void",signature:{arguments:[{type:{name:"string"},name:"char"},{type:{name:"number"},name:"index"}],return:{name:"void"}}},description:""},onTypingEnd:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const L=({width:e="2px",height:t="1rem",marginLeft:a="4px",cursorColor:l="black"})=>r.jsx("span",{style:{display:"inline-block",verticalAlign:"middle",width:e,height:t,marginLeft:a,backgroundColor:l}});L.__docgenInfo={description:"",methods:[],displayName:"DefaultCursor",props:{width:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"2px"',computed:!1}},height:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"1rem"',computed:!1}},cursorColor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"black"',computed:!1}},marginLeft:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"4px"',computed:!1}}}};const{normalizeProjectAnnotations:J,composeConfigs:Q,getCoreAnnotations:X}=__STORYBOOK_MODULE_PREVIEW_API__,{global:M}=__STORYBOOK_MODULE_GLOBAL__,{composeConfigs:N,setDefaultProjectAnnotations:Z,setProjectAnnotations:ee,composeStory:te,composeStories:ne}=__STORYBOOK_MODULE_PREVIEW_API__;var{window:k}=M;k&&(k.STORYBOOK_ENV="react");N([H,F,{renderToCanvas:async(e,t)=>{if(e.storyContext.testingLibraryRender==null)return K(e,t);let{storyContext:{context:a,unboundStoryFn:l,testingLibraryRender:m}}=e,{unmount:h}=m(n.createElement(l,{...a}),{container:a.canvasElement});return h}}]);var C;typeof module<"u"&&((C=module==null?void 0:module.hot)==null||C.decline());const{action:p}=__STORYBOOK_MODULE_ACTIONS__,re={title:"Examples/TypingTextExample",component:_,tags:["autodocs"],parameters:{docs:{description:{component:"A lightweight and fully customizable typing animation component for React."}}}},f={args:{text:"Hello React Typing Text!",interval:60,loop:!0,startDelay:200,autoScroll:!1,cursor:r.jsx(L,{height:"18px"}),style:{fontSize:18,fontWeight:600},onType:p("onType"),onTypingStart:p("onTypingStart"),onTypingEnd:p("onTypingEnd")},parameters:{docs:{description:{story:"The default configuration with looping enabled and a custom cursor component."}}}},y={args:{text:"Typing with a little sparkle...",interval:80,autoScroll:!1,loop:!0,loopDelay:500,cursor:r.jsx("span",{style:{marginLeft:"4px",color:"#facc15"},children:"✨"}),style:{fontFamily:"'Fira Code', monospace",fontSize:"1.2rem",lineHeight:"1.8",textShadow:"1px 1px 2px rgba(250, 204, 21, 0.3)"}},parameters:{docs:{description:{story:"A styled version of TypingText with a sparkle ✨ cursor and a code-like font."}}}},g={args:{text:"You can control the typing with buttons!"},render:()=>{const e=n.useRef(null);return r.jsxs("div",{children:[r.jsx(_,{ref:e,text:"You can control the typing with buttons!",interval:100,autoScroll:!1,onType:(t,a)=>{p("onType")(`${t} (${a})`)},style:{fontSize:18,fontWeight:600},onTypingStart:p("onTypingStart"),onTypingEnd:p("onTypingEnd")}),r.jsxs("div",{style:{display:"flex",gap:"10px",marginTop:"1rem"},children:[r.jsx("button",{onClick:()=>{var t;return(t=e.current)==null?void 0:t.pause()},children:"Pause"}),r.jsx("button",{onClick:()=>{var t;return(t=e.current)==null?void 0:t.resume()},children:"Resume"}),r.jsx("button",{onClick:()=>{var t;return(t=e.current)==null?void 0:t.reset()},children:"Reset"}),r.jsx("button",{onClick:()=>{var t;return(t=e.current)==null?void 0:t.skip()},children:"Skip"})]})]})},parameters:{docs:{description:{story:"Demonstrates how to control the TypingText animation using ref-based imperative methods."}}}};var E,O,j;f.parameters={...f.parameters,docs:{...(E=f.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(j=(O=f.parameters)==null?void 0:O.docs)==null?void 0:j.source}}};var q,D,A;y.parameters={...y.parameters,docs:{...(q=y.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(A=(D=y.parameters)==null?void 0:D.docs)==null?void 0:A.source}}};var P,V,I;g.parameters={...g.parameters,docs:{...(P=g.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    text: "You can control the typing with buttons!"
  },
  render: () => {
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
  },
  parameters: {
    docs: {
      description: {
        story: "Demonstrates how to control the TypingText animation using ref-based imperative methods."
      }
    }
  }
}`,...(I=(V=g.parameters)==null?void 0:V.docs)==null?void 0:I.source}}};const oe=["Default","WithCustomStyle","WithRefControl"];export{f as Default,y as WithCustomStyle,g as WithRefControl,oe as __namedExportsOrder,re as default};
