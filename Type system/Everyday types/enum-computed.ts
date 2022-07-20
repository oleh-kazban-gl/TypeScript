enum E1 {
  X,
  Y,
  Z
}

enum E2 {
  A = 1,
  B,
  C
}

enum FileAccess {
  // constant members
  None,
  Read = 1 << 1,
  Write = 1 << 2,
  ReadWrite = Read | Write,
  // computed member
  G = "123".length
}

const enum Enum {
  // constant members
  A = 1,
  B = A * 2
}

