//draw curve with shader  ===  run on shadertoy

float plot(vec2 uv,float pct)
{
    return smoothstep(pct-0.01,pct,uv.y) - smoothstep(pct,pct+0.01,uv.y);
}

void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
    // Normalized pixel coordinates (from 0 to 1)
    vec2 uv = fragCoord/iResolution.xy;
    uv.x = uv.x*2.0 - 1.0; // x 映射到-1,1
    
    float y = uv.x;//直线y=x;	  
    //float y = uv.x*uv.x; //曲线 y=x^2;    
    //float y = 0.25+0.5*step(0.5,uv.x);
    //float y = smoothstep(0.2,0.5,uv.x) - smoothstep(0.5,0.8,uv.x);
    
    vec3 col = vec3(uv.x);
    
    float pct = plot(uv,y);
    
    col = (1.0 - pct)*col + pct*vec3(0,1,0);
    
    // Output to screen
    fragColor = vec4(col,1.0);
}
