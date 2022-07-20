class Util {
  public static getContainer() { }
  public static getTitle() { }
  public static getParagraphContent() {
    return this.getContent();
  }

  private static getContent() {
    this.getContainer();
  }
}

Util.getContainer();
Util.getParagraphContent();
Util.getContent();
