//ranodm:float =>float
float random1(float pct)
{
    return fract(sin(pct)*1e4);
}

//noise:float=>float
float noise1(float pct)
{
   	float i = floor(pct);
    float f = fract(pct);
    
    float u = f*f*(3.0-2.0*f);
    return mix(random1(float(i)),random1(float(i+1.)),u);
}

//random:vec2 =>float
float random2(vec2 uv)
{
    return fract(sin(dot(uv,vec2(12.9898,78.5634)))*3546.587925);
}

//random:vec2 =>vec2
vec2 random22(vec2 uv)
{
    vec2 pos = vec2(dot(uv,vec2(12.32323,43.55543)),dot(uv,vec2(132.343723,143.44543)));
    return fract(sin(pos)*234.4342);
}
//noise:vec2=>float
float noise2(vec2 uv)
{
    vec2 i = floor(uv);
    vec2 f = fract(uv);
    
    float a = random(uv);
    float b = random(uv+vec2(0,1));
    float c = random(uv+vec2(1,0));
    float d = random(uv+vec2(1,1));
    
    vec2 u = f*f*(3.0-2.0*f);
    return mix(a,b,f.x) + (c-a)*f.y*(1.0-f.x)+(d-b)*f.x*f.y;
}
