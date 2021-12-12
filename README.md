# RandPw
Simple CLI tool for generating cryptographically safe hex strings.

### Usage
add to zshrc

```
alias randpw="deno run https://raw.githubusercontent.com/seanaye/randpw/main/mod.ts"
```

In shell

```
> randpw
fbb2388560fee9521e81f5c52baa1ebe
```

If you want a specific byte length you can provide a number

```
> randpw 6
3f99b64080ba
```
