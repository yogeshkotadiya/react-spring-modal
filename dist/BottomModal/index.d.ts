import React from 'react';
import { useTransition } from 'react-spring';
import { IBaseModalProps } from '../BaseModal';
import { ObjectOf } from '../generic-types';
import './style.css';
interface IProps extends IBaseModalProps, ObjectOf<any> {
    modalTransition: ReturnType<typeof useTransition>;
}
export declare function useBottomModalTransition(isOpen: boolean, props?: ObjectOf<any>): import("react-spring").UseTransitionResult<boolean, Pick<React.CSSProperties, "alignContent" | "alignItems" | "alignSelf" | "animationDelay" | "animationDirection" | "animationDuration" | "animationFillMode" | "animationIterationCount" | "animationName" | "animationPlayState" | "animationTimingFunction" | "appearance" | "aspectRatio" | "backdropFilter" | "backfaceVisibility" | "backgroundAttachment" | "backgroundBlendMode" | "backgroundClip" | "backgroundColor" | "backgroundImage" | "backgroundOrigin" | "backgroundPosition" | "backgroundPositionX" | "backgroundPositionY" | "backgroundRepeat" | "backgroundSize" | "blockOverflow" | "blockSize" | "borderBlockColor" | "borderBlockEndColor" | "borderBlockEndStyle" | "borderBlockEndWidth" | "borderBlockStartColor" | "borderBlockStartStyle" | "borderBlockStartWidth" | "borderBlockStyle" | "borderBlockWidth" | "borderBottomColor" | "borderBottomLeftRadius" | "borderBottomRightRadius" | "borderBottomStyle" | "borderBottomWidth" | "borderCollapse" | "borderEndEndRadius" | "borderEndStartRadius" | "borderImageOutset" | "borderImageRepeat" | "borderImageSlice" | "borderImageSource" | "borderImageWidth" | "borderInlineColor" | "borderInlineEndColor" | "borderInlineEndStyle" | "borderInlineEndWidth" | "borderInlineStartColor" | "borderInlineStartStyle" | "borderInlineStartWidth" | "borderInlineStyle" | "borderInlineWidth" | "borderLeftColor" | "borderLeftStyle" | "borderLeftWidth" | "borderRightColor" | "borderRightStyle" | "borderRightWidth" | "borderSpacing" | "borderStartEndRadius" | "borderStartStartRadius" | "borderTopColor" | "borderTopLeftRadius" | "borderTopRightRadius" | "borderTopStyle" | "borderTopWidth" | "bottom" | "boxDecorationBreak" | "boxShadow" | "boxSizing" | "breakAfter" | "breakBefore" | "breakInside" | "captionSide" | "caretColor" | "clear" | "clipPath" | "color" | "colorAdjust" | "columnCount" | "columnFill" | "columnGap" | "columnRuleColor" | "columnRuleStyle" | "columnRuleWidth" | "columnSpan" | "columnWidth" | "contain" | "content" | "counterIncrement" | "counterReset" | "counterSet" | "cursor" | "direction" | "display" | "emptyCells" | "filter" | "flexBasis" | "flexDirection" | "flexGrow" | "flexShrink" | "flexWrap" | "float" | "fontFamily" | "fontFeatureSettings" | "fontKerning" | "fontLanguageOverride" | "fontOpticalSizing" | "fontSize" | "fontSizeAdjust" | "fontStretch" | "fontStyle" | "fontSynthesis" | "fontVariant" | "fontVariantCaps" | "fontVariantEastAsian" | "fontVariantLigatures" | "fontVariantNumeric" | "fontVariantPosition" | "fontVariationSettings" | "fontWeight" | "gridAutoColumns" | "gridAutoFlow" | "gridAutoRows" | "gridColumnEnd" | "gridColumnStart" | "gridRowEnd" | "gridRowStart" | "gridTemplateAreas" | "gridTemplateColumns" | "gridTemplateRows" | "hangingPunctuation" | "height" | "hyphens" | "imageOrientation" | "imageRendering" | "imageResolution" | "initialLetter" | "inlineSize" | "inset" | "insetBlock" | "insetBlockEnd" | "insetBlockStart" | "insetInline" | "insetInlineEnd" | "insetInlineStart" | "isolation" | "justifyContent" | "justifyItems" | "justifySelf" | "left" | "letterSpacing" | "lineBreak" | "lineHeight" | "lineHeightStep" | "listStyleImage" | "listStylePosition" | "listStyleType" | "marginBlock" | "marginBlockEnd" | "marginBlockStart" | "marginBottom" | "marginInline" | "marginInlineEnd" | "marginInlineStart" | "marginLeft" | "marginRight" | "marginTop" | "maskBorderMode" | "maskBorderOutset" | "maskBorderRepeat" | "maskBorderSlice" | "maskBorderSource" | "maskBorderWidth" | "maskClip" | "maskComposite" | "maskImage" | "maskMode" | "maskOrigin" | "maskPosition" | "maskRepeat" | "maskSize" | "maskType" | "maxBlockSize" | "maxHeight" | "maxInlineSize" | "maxLines" | "maxWidth" | "minBlockSize" | "minHeight" | "minInlineSize" | "minWidth" | "mixBlendMode" | "motionDistance" | "motionPath" | "motionRotation" | "objectFit" | "objectPosition" | "offsetAnchor" | "offsetDistance" | "offsetPath" | "offsetRotate" | "offsetRotation" | "opacity" | "order" | "orphans" | "outlineColor" | "outlineOffset" | "outlineStyle" | "outlineWidth" | "overflow" | "overflowAnchor" | "overflowBlock" | "overflowClipBox" | "overflowInline" | "overflowWrap" | "overflowX" | "overflowY" | "overscrollBehavior" | "overscrollBehaviorX" | "overscrollBehaviorY" | "paddingBlock" | "paddingBlockEnd" | "paddingBlockStart" | "paddingBottom" | "paddingInline" | "paddingInlineEnd" | "paddingInlineStart" | "paddingLeft" | "paddingRight" | "paddingTop" | "pageBreakAfter" | "pageBreakBefore" | "pageBreakInside" | "paintOrder" | "perspective" | "perspectiveOrigin" | "placeContent" | "pointerEvents" | "position" | "quotes" | "resize" | "right" | "rotate" | "rowGap" | "rubyAlign" | "rubyMerge" | "rubyPosition" | "scale" | "scrollBehavior" | "scrollMargin" | "scrollMarginBlock" | "scrollMarginBlockEnd" | "scrollMarginBlockStart" | "scrollMarginBottom" | "scrollMarginInline" | "scrollMarginInlineEnd" | "scrollMarginInlineStart" | "scrollMarginLeft" | "scrollMarginRight" | "scrollMarginTop" | "scrollPadding" | "scrollPaddingBlock" | "scrollPaddingBlockEnd" | "scrollPaddingBlockStart" | "scrollPaddingBottom" | "scrollPaddingInline" | "scrollPaddingInlineEnd" | "scrollPaddingInlineStart" | "scrollPaddingLeft" | "scrollPaddingRight" | "scrollPaddingTop" | "scrollSnapAlign" | "scrollSnapStop" | "scrollSnapType" | "scrollbarColor" | "scrollbarWidth" | "shapeImageThreshold" | "shapeMargin" | "shapeOutside" | "tabSize" | "tableLayout" | "textAlign" | "textAlignLast" | "textCombineUpright" | "textDecorationColor" | "textDecorationLine" | "textDecorationSkip" | "textDecorationSkipInk" | "textDecorationStyle" | "textDecorationThickness" | "textDecorationWidth" | "textEmphasisColor" | "textEmphasisPosition" | "textEmphasisStyle" | "textIndent" | "textJustify" | "textOrientation" | "textOverflow" | "textRendering" | "textShadow" | "textSizeAdjust" | "textTransform" | "textUnderlineOffset" | "textUnderlinePosition" | "top" | "touchAction" | "transform" | "transformBox" | "transformOrigin" | "transformStyle" | "transitionDelay" | "transitionDuration" | "transitionProperty" | "transitionTimingFunction" | "translate" | "unicodeBidi" | "userSelect" | "verticalAlign" | "visibility" | "whiteSpace" | "widows" | "width" | "willChange" | "wordBreak" | "wordSpacing" | "wordWrap" | "writingMode" | "zIndex" | "zoom" | "all" | "animation" | "background" | "border" | "borderBlock" | "borderBlockEnd" | "borderBlockStart" | "borderBottom" | "borderColor" | "borderImage" | "borderInline" | "borderInlineEnd" | "borderInlineStart" | "borderLeft" | "borderRadius" | "borderRight" | "borderStyle" | "borderTop" | "borderWidth" | "columnRule" | "columns" | "flex" | "flexFlow" | "font" | "gap" | "grid" | "gridArea" | "gridColumn" | "gridRow" | "gridTemplate" | "lineClamp" | "listStyle" | "margin" | "mask" | "maskBorder" | "motion" | "offset" | "outline" | "padding" | "placeItems" | "placeSelf" | "textDecoration" | "textEmphasis" | "transition" | "MozAnimationDelay" | "MozAnimationDirection" | "MozAnimationDuration" | "MozAnimationFillMode" | "MozAnimationIterationCount" | "MozAnimationName" | "MozAnimationPlayState" | "MozAnimationTimingFunction" | "MozAppearance" | "MozBackfaceVisibility" | "MozBorderEndColor" | "MozBorderEndStyle" | "MozBorderEndWidth" | "MozBorderStartColor" | "MozBorderStartStyle" | "MozBoxSizing" | "MozColumnCount" | "MozColumnFill" | "MozColumnGap" | "MozColumnRuleColor" | "MozColumnRuleStyle" | "MozColumnRuleWidth" | "MozColumnWidth" | "MozContextProperties" | "MozFloatEdge" | "MozFontFeatureSettings" | "MozFontLanguageOverride" | "MozForceBrokenImageIcon" | "MozHyphens" | "MozImageRegion" | "MozMarginEnd" | "MozMarginStart" | "MozOrient" | "MozOutlineRadiusBottomleft" | "MozOutlineRadiusBottomright" | "MozOutlineRadiusTopleft" | "MozOutlineRadiusTopright" | "MozPaddingEnd" | "MozPaddingStart" | "MozPerspective" | "MozPerspectiveOrigin" | "MozStackSizing" | "MozTabSize" | "MozTextSizeAdjust" | "MozTransformOrigin" | "MozTransformStyle" | "MozTransitionDelay" | "MozTransitionDuration" | "MozTransitionProperty" | "MozTransitionTimingFunction" | "MozUserFocus" | "MozUserModify" | "MozUserSelect" | "MozWindowDragging" | "msAccelerator" | "msAlignSelf" | "msBlockProgression" | "msContentZoomChaining" | "msContentZoomLimitMax" | "msContentZoomLimitMin" | "msContentZoomSnapPoints" | "msContentZoomSnapType" | "msContentZooming" | "msFilter" | "msFlexDirection" | "msFlexPositive" | "msFlowFrom" | "msFlowInto" | "msGridColumns" | "msGridRows" | "msHighContrastAdjust" | "msHyphenateLimitChars" | "msHyphenateLimitLines" | "msHyphenateLimitZone" | "msHyphens" | "msImeAlign" | "msLineBreak" | "msOrder" | "msOverflowStyle" | "msOverflowX" | "msOverflowY" | "msScrollChaining" | "msScrollLimitXMax" | "msScrollLimitXMin" | "msScrollLimitYMax" | "msScrollLimitYMin" | "msScrollRails" | "msScrollSnapPointsX" | "msScrollSnapPointsY" | "msScrollSnapType" | "msScrollTranslation" | "msScrollbar3dlightColor" | "msScrollbarArrowColor" | "msScrollbarBaseColor" | "msScrollbarDarkshadowColor" | "msScrollbarFaceColor" | "msScrollbarHighlightColor" | "msScrollbarShadowColor" | "msScrollbarTrackColor" | "msTextAutospace" | "msTextCombineHorizontal" | "msTextOverflow" | "msTouchAction" | "msTouchSelect" | "msTransform" | "msTransformOrigin" | "msTransitionDelay" | "msTransitionDuration" | "msTransitionProperty" | "msTransitionTimingFunction" | "msUserSelect" | "msWordBreak" | "msWrapFlow" | "msWrapMargin" | "msWrapThrough" | "msWritingMode" | "OObjectFit" | "OObjectPosition" | "OTabSize" | "OTextOverflow" | "OTransformOrigin" | "WebkitAlignContent" | "WebkitAlignItems" | "WebkitAlignSelf" | "WebkitAnimationDelay" | "WebkitAnimationDirection" | "WebkitAnimationDuration" | "WebkitAnimationFillMode" | "WebkitAnimationIterationCount" | "WebkitAnimationName" | "WebkitAnimationPlayState" | "WebkitAnimationTimingFunction" | "WebkitAppearance" | "WebkitBackdropFilter" | "WebkitBackfaceVisibility" | "WebkitBackgroundClip" | "WebkitBackgroundOrigin" | "WebkitBackgroundSize" | "WebkitBorderBeforeColor" | "WebkitBorderBeforeStyle" | "WebkitBorderBeforeWidth" | "WebkitBorderBottomLeftRadius" | "WebkitBorderBottomRightRadius" | "WebkitBorderImageSlice" | "WebkitBorderTopLeftRadius" | "WebkitBorderTopRightRadius" | "WebkitBoxDecorationBreak" | "WebkitBoxReflect" | "WebkitBoxShadow" | "WebkitBoxSizing" | "WebkitClipPath" | "WebkitColorAdjust" | "WebkitColumnCount" | "WebkitColumnFill" | "WebkitColumnGap" | "WebkitColumnRuleColor" | "WebkitColumnRuleStyle" | "WebkitColumnRuleWidth" | "WebkitColumnSpan" | "WebkitColumnWidth" | "WebkitFilter" | "WebkitFlexBasis" | "WebkitFlexDirection" | "WebkitFlexGrow" | "WebkitFlexShrink" | "WebkitFlexWrap" | "WebkitFontFeatureSettings" | "WebkitFontKerning" | "WebkitFontVariantLigatures" | "WebkitHyphens" | "WebkitJustifyContent" | "WebkitLineBreak" | "WebkitLineClamp" | "WebkitMarginEnd" | "WebkitMarginStart" | "WebkitMaskAttachment" | "WebkitMaskClip" | "WebkitMaskComposite" | "WebkitMaskImage" | "WebkitMaskOrigin" | "WebkitMaskPosition" | "WebkitMaskPositionX" | "WebkitMaskPositionY" | "WebkitMaskRepeat" | "WebkitMaskRepeatX" | "WebkitMaskRepeatY" | "WebkitMaskSize" | "WebkitMaxInlineSize" | "WebkitOrder" | "WebkitOverflowScrolling" | "WebkitPaddingEnd" | "WebkitPaddingStart" | "WebkitPerspective" | "WebkitPerspectiveOrigin" | "WebkitScrollSnapType" | "WebkitShapeMargin" | "WebkitTapHighlightColor" | "WebkitTextCombine" | "WebkitTextDecorationColor" | "WebkitTextDecorationLine" | "WebkitTextDecorationSkip" | "WebkitTextDecorationStyle" | "WebkitTextEmphasisColor" | "WebkitTextEmphasisPosition" | "WebkitTextEmphasisStyle" | "WebkitTextFillColor" | "WebkitTextOrientation" | "WebkitTextSizeAdjust" | "WebkitTextStrokeColor" | "WebkitTextStrokeWidth" | "WebkitTouchCallout" | "WebkitTransform" | "WebkitTransformOrigin" | "WebkitTransformStyle" | "WebkitTransitionDelay" | "WebkitTransitionDuration" | "WebkitTransitionProperty" | "WebkitTransitionTimingFunction" | "WebkitUserModify" | "WebkitUserSelect" | "WebkitWritingMode" | "MozAnimation" | "MozBorderImage" | "MozColumnRule" | "MozColumns" | "MozTransition" | "msContentZoomLimit" | "msContentZoomSnap" | "msFlex" | "msScrollLimit" | "msScrollSnapX" | "msScrollSnapY" | "msTransition" | "WebkitAnimation" | "WebkitBorderBefore" | "WebkitBorderImage" | "WebkitBorderRadius" | "WebkitColumnRule" | "WebkitColumns" | "WebkitFlex" | "WebkitFlexFlow" | "WebkitMask" | "WebkitTextEmphasis" | "WebkitTextStroke" | "WebkitTransition" | "boxAlign" | "boxDirection" | "boxFlex" | "boxFlexGroup" | "boxLines" | "boxOrdinalGroup" | "boxOrient" | "boxPack" | "clip" | "fontVariantAlternates" | "gridColumnGap" | "gridGap" | "gridRowGap" | "imeMode" | "offsetBlock" | "offsetBlockEnd" | "offsetBlockStart" | "offsetInline" | "offsetInlineEnd" | "offsetInlineStart" | "scrollSnapCoordinate" | "scrollSnapDestination" | "scrollSnapPointsX" | "scrollSnapPointsY" | "scrollSnapTypeX" | "scrollSnapTypeY" | "textCombineHorizontal" | "KhtmlBoxAlign" | "KhtmlBoxDirection" | "KhtmlBoxFlex" | "KhtmlBoxFlexGroup" | "KhtmlBoxLines" | "KhtmlBoxOrdinalGroup" | "KhtmlBoxOrient" | "KhtmlBoxPack" | "KhtmlLineBreak" | "KhtmlOpacity" | "KhtmlUserSelect" | "MozBackgroundClip" | "MozBackgroundInlinePolicy" | "MozBackgroundOrigin" | "MozBackgroundSize" | "MozBinding" | "MozBorderBottomColors" | "MozBorderLeftColors" | "MozBorderRadius" | "MozBorderRadiusBottomleft" | "MozBorderRadiusBottomright" | "MozBorderRadiusTopleft" | "MozBorderRadiusTopright" | "MozBorderRightColors" | "MozBorderTopColors" | "MozBoxAlign" | "MozBoxDirection" | "MozBoxFlex" | "MozBoxOrdinalGroup" | "MozBoxOrient" | "MozBoxPack" | "MozBoxShadow" | "MozOpacity" | "MozOutline" | "MozOutlineColor" | "MozOutlineRadius" | "MozOutlineStyle" | "MozOutlineWidth" | "MozTextAlignLast" | "MozTextBlink" | "MozTextDecorationColor" | "MozTextDecorationLine" | "MozTextDecorationStyle" | "MozUserInput" | "MozWindowShadow" | "msImeMode" | "OAnimation" | "OAnimationDelay" | "OAnimationDirection" | "OAnimationDuration" | "OAnimationFillMode" | "OAnimationIterationCount" | "OAnimationName" | "OAnimationPlayState" | "OAnimationTimingFunction" | "OBackgroundSize" | "OBorderImage" | "OTransform" | "OTransition" | "OTransitionDelay" | "OTransitionDuration" | "OTransitionProperty" | "OTransitionTimingFunction" | "WebkitBoxAlign" | "WebkitBoxDirection" | "WebkitBoxFlex" | "WebkitBoxFlexGroup" | "WebkitBoxLines" | "WebkitBoxOrdinalGroup" | "WebkitBoxOrient" | "WebkitBoxPack" | "WebkitScrollSnapPointsX" | "WebkitScrollSnapPointsY" | "alignmentBaseline" | "baselineShift" | "clipRule" | "colorInterpolation" | "colorRendering" | "dominantBaseline" | "fill" | "fillOpacity" | "fillRule" | "floodColor" | "floodOpacity" | "glyphOrientationVertical" | "lightingColor" | "marker" | "markerEnd" | "markerMid" | "markerStart" | "shapeRendering" | "stopColor" | "stopOpacity" | "stroke" | "strokeDasharray" | "strokeDashoffset" | "strokeLinecap" | "strokeLinejoin" | "strokeMiterlimit" | "strokeOpacity" | "strokeWidth" | "textAnchor" | "vectorEffect">>[];
export declare function BottomModal({ children, isOpen, autoFocus, onRequestClose, className, modalTransition, style, ...props }: IProps): JSX.Element;
export {};
