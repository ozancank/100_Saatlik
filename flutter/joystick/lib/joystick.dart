import 'package:flutter/material.dart';

enum Directions { up, down, right, left }

enum JoystickModes { all, horizontal, vertical }

class Joystick extends StatefulWidget {
  final Color backgroundColor;
  final Color iconColor;
  final double opacity;
  final double size;
  final bool isDraggable;
  final JoystickModes joystickMode;

  final VoidCallback onUpPressed;
  final VoidCallback onLeftPressed;
  final VoidCallback onRightPressed;
  final VoidCallback onDownPressed;
  final Function(Directions) onPressed;

  Joystick({
    this.backgroundColor,
    this.opacity,
    @required this.size,
    this.onUpPressed,
    this.onLeftPressed,
    this.onRightPressed,
    this.onDownPressed,
    this.onPressed,
    this.isDraggable,
    this.joystickMode,
    this.iconColor,
  })  : assert(size != null),
        assert(isDraggable != null);
  @override
  _JoystickState createState() => _JoystickState();
}

class _JoystickState extends State<Joystick> {
  double _x = 0;
  double _y = 0;

  @override
  Widget build(BuildContext context) {
    return Stack(
      children: <Widget>[
        Positioned(
          bottom: _y,
          right: _x,
          child: GestureDetector(
            onLongPress: (widget.isDraggable == false)
                ? null
                : () {
                    setState(() {
                      _x = 0;
                      _y = 0;
                    });
                  },
            child: Container(
              height: widget.size,
              width: widget.size,
              decoration: BoxDecoration(
                color:
                    widget.backgroundColor.withOpacity(widget.opacity ?? 1) ??
                        Colors.grey.withOpacity(widget.opacity ?? 1),
                shape: BoxShape.circle,
              ),
              child: Column(children: [
                Expanded(
                  flex: 1,
                  child: Row(
                    children: <Widget>[
                      Expanded(
                        child: SizedBox(),
                      ),
                      Expanded(
                        child: (widget.joystickMode == JoystickModes.horizontal)
                            ? SizedBox()
                            : IconButton(
                                padding: EdgeInsets.all(0),
                                icon: Icon(
                                  Icons.keyboard_arrow_up,
                                  color: (widget.iconColor == null)
                                      ? Colors.black
                                      : widget.iconColor,
                                ),
                                onPressed: () {
                                  if (widget.onUpPressed != null)
                                    widget.onUpPressed();
                                  if (widget.onPressed != null)
                                    widget.onPressed(Directions.up);
                                },
                              ),
                      ),
                      Expanded(
                        child: SizedBox(),
                      ),
                    ],
                  ),
                ),
                Expanded(
                  flex: 1,
                  child: Row(
                    children: <Widget>[
                      Expanded(
                        child: (widget.joystickMode == JoystickModes.vertical)
                            ? SizedBox()
                            : IconButton(
                                padding: EdgeInsets.all(0),
                                icon: Icon(
                                  Icons.keyboard_arrow_left,
                                  color: (widget.iconColor == null)
                                      ? Colors.black
                                      : widget.iconColor,
                                ),
                                onPressed: () {
                                  if (widget.onLeftPressed != null)
                                    widget.onLeftPressed();
                                  if (widget.onPressed != null)
                                    widget.onPressed(Directions.left);
                                },
                              ),
                      ),
                      Expanded(
                        child: GestureDetector(
                          child: Icon(
                            Icons.drag_handle,
                            color: (widget.iconColor == null)
                                ? Colors.black
                                : widget.iconColor,
                          ),
                          onPanUpdate: (_values) {
                            setState(() {
                              if (widget.isDraggable == true) {
                                _x -= _values.delta.dx;
                              }
                              _y -= _values.delta.dy;
                            });
                          },
                        ),
                      ),
                      Expanded(
                        child: (widget.joystickMode == JoystickModes.vertical)
                            ? SizedBox()
                            : IconButton(
                                padding: EdgeInsets.all(0),
                                icon: Icon(
                                  Icons.keyboard_arrow_right,
                                  color: (widget.iconColor == null)
                                      ? Colors.black
                                      : widget.iconColor,
                                ),
                                onPressed: () {
                                  if (widget.onRightPressed != null)
                                    widget.onRightPressed();
                                  if (widget.onPressed != null)
                                    widget.onPressed(Directions.right);
                                },
                              ),
                      ),
                    ],
                  ),
                ),
                Expanded(
                  flex: 1,
                  child: Row(
                    children: <Widget>[
                      Expanded(
                        child: SizedBox(),
                      ),
                      Expanded(
                        child: (widget.joystickMode == JoystickModes.horizontal)
                            ? SizedBox()
                            : IconButton(
                                padding: EdgeInsets.all(0),
                                icon: Icon(
                                  Icons.keyboard_arrow_down,
                                  color: (widget.iconColor == null)
                                      ? Colors.black
                                      : widget.iconColor,
                                ),
                                onPressed: () {
                                  if (widget.onDownPressed != null)
                                    widget.onDownPressed();
                                  if (widget.onPressed != null)
                                    widget.onPressed(Directions.down);
                                },
                              ),
                      ),
                      Expanded(
                        child: SizedBox(),
                      ),
                    ],
                  ),
                ),
              ]),
            ),
          ),
        ),
      ],
    );
  }
}
