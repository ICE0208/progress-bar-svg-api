# Progress Bar SVG API

![](https://ice-progress.vercel.app/api/progress?progress=28)
![](https://ice-progress.vercel.app/api/progress?progress=43)
![](https://ice-progress.vercel.app/api/progress?progress=75)

## 사용 방법

마크다운에서 일반 이미지를 쓰는 것과 동일한 방법으로 사용할 수 있습니다.

```
https://ice-progress.vercel.app/api/progress?progress=진행률
```

진행률에 0에서 100사이의 숫자를 적으면 해당 퍼센테이지의 진행바를 얻을 수 있습니다.

### 예시

```
![](https://ice-progress.vercel.app/api/progress?progress=32)
![](https://ice-progress.vercel.app/api/progress?progress=69)
![](https://ice-progress.vercel.app/api/progress?progress=100)
```

![](https://ice-progress.vercel.app/api/progress?progress=32)  
![](https://ice-progress.vercel.app/api/progress?progress=69)  
![](https://ice-progress.vercel.app/api/progress?progress=100)

## 옵션

### 배경 색상

배경 색상은 검정색이 기본값이며, `theme` 파라미터를 통해 하얀색으로 변경할 수 있습니다.

```
![](https://ice-progress.vercel.app/api/progress?progress=30&theme=white)
![](https://ice-progress.vercel.app/api/progress?progress=58&theme=white)
![](https://ice-progress.vercel.app/api/progress?progress=86&theme=white)
```

![](https://ice-progress.vercel.app/api/progress?progress=30&theme=white)  
![](https://ice-progress.vercel.app/api/progress?progress=58&theme=white)  
![](https://ice-progress.vercel.app/api/progress?progress=86&theme=white)

### 너비와 높이

너비의 기본값은 `100`, 높이의 기본값은 `20`입니다. `width`와 `height` 파라미터로 너비와 높이를 지정할 수 있습니다.

```
![](https://ice-progress.vercel.app/api/progress?progress=89&width=70&height=40)
![](https://ice-progress.vercel.app/api/progress?progress=56&width=160&height=30)
![](https://ice-progress.vercel.app/api/progress?progress=22&width=220)
```

![](https://ice-progress.vercel.app/api/progress?progress=89&width=70&height=40)  
![](https://ice-progress.vercel.app/api/progress?progress=56&width=160&height=30)  
![](https://ice-progress.vercel.app/api/progress?progress=22&width=220)

## 기타 설명

> **프로세스 바의 색상은 `1%~32%`는 빨간색, `33%~69%`는 노란색, `70%~100%`는 초록색입니다.**
