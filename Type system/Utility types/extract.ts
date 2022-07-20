type T0 = Extract<"a" | "b" | "c", "a" | "f">;
//    ^ = type T0 = "a"

type T1 = Extract<string | number | (() => void), Function>;
//    ^ = type T1 = () => void
