// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: btm2dnrunf38Pvbn4oHZBZ
// Component: cNhW0j82HfTQ

import * as React from "react";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import { RichLayout } from "@plasmicpkgs/plasmic-rich-components/skinny/rich-layout";
import { LoadingBoundary } from "@plasmicpkgs/plasmic-basic-components";
import { Fetcher } from "@plasmicapp/react-web/lib/data-sources";

import { useScreenVariants as useScreenVariantstmwSNpl95Kx } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: -tmwSNpl95kx/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: btm2dnrunf38Pvbn4oHZBZ/projectcss
import sty from "./PlasmicPageLayout.module.css"; // plasmic-import: cNhW0j82HfTQ/css

import LoadingIcon from "./icons/PlasmicIcon__Loading"; // plasmic-import: XVCv8nvUwHN9/icon
import Icon8Icon from "./icons/PlasmicIcon__Icon8"; // plasmic-import: ww2EX6-AFn_a/icon

createPlasmicElementProxy;

export type PlasmicPageLayout__VariantMembers = {};
export type PlasmicPageLayout__VariantsArgs = {};
type VariantPropType = keyof PlasmicPageLayout__VariantsArgs;
export const PlasmicPageLayout__VariantProps = new Array<VariantPropType>();

export type PlasmicPageLayout__ArgsType = {
  children?: React.ReactNode;
};
type ArgPropType = keyof PlasmicPageLayout__ArgsType;
export const PlasmicPageLayout__ArgProps = new Array<ArgPropType>("children");

export type PlasmicPageLayout__OverridesType = {
  foundation?: Flex__<typeof RichLayout>;
  loadingBoundary?: Flex__<typeof LoadingBoundary>;
};

export interface DefaultPageLayoutProps {
  children?: React.ReactNode;
  className?: string;
}

const $$ = {};

function PlasmicPageLayout__RenderFunc(props: {
  variants: PlasmicPageLayout__VariantsArgs;
  args: PlasmicPageLayout__ArgsType;
  overrides: PlasmicPageLayout__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(
    () =>
      Object.assign(
        {},
        Object.fromEntries(
          Object.entries(props.args).filter(([_, v]) => v !== undefined)
        )
      ),
    [props.args]
  );

  const $props = {
    ...args,
    ...variants
  };

  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = useCurrentUser?.() || {};

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantstmwSNpl95Kx()
  });

  return (
    <RichLayout
      data-plasmic-name={"foundation"}
      data-plasmic-override={overrides.foundation}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        "__wab_instance",
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        plasmic_plasmic_rich_components_css.plasmic_tokens,
        sty.foundation
      )}
      layout={"side"}
      logoElement={
        <Icon8Icon
          className={classNames(projectcss.all, sty.svg___6GfBr)}
          role={"img"}
        />
      }
      navMenuItems={
        hasVariant(globalVariants, "screen", "mobileOnly")
          ? (() => {
              const __composite = [
                { path: null, name: null },
                { path: null, name: null },
                { path: null, name: null }
              ];
              __composite["0"]["path"] = "/";
              __composite["0"]["name"] = "\u5e02\u573a";
              __composite["1"]["path"] = "/positions";
              __composite["1"]["name"] = "\u5173\u4e8e\u6211\u4eec";
              __composite["2"]["path"] = `/candidates`;
              __composite["2"]["name"] = "\u52a0\u5165\u6211\u4eec";
              return __composite;
            })()
          : (() => {
              const __composite = [
                { path: null, name: null },
                { path: null, name: null },
                { path: null, name: null }
              ];
              __composite["0"]["path"] = "/";
              __composite["0"]["name"] = "Market";
              __composite["1"]["path"] = "/positions";
              __composite["1"]["name"] = "Join";
              __composite["2"]["path"] = `/candidates`;
              __composite["2"]["name"] = "About";
              return __composite;
            })()
      }
      simpleNavTheme={(() => {
        const __composite = { scheme: null };
        __composite["scheme"] = "primary";
        return __composite;
      })()}
      title={
        hasVariant(globalVariants, "screen", "mobileOnly")
          ? "\u65f6\u95f4\u5bf9\u51b2\u57fa\u91d1"
          : "Time Foundation"
      }
    >
      <LoadingBoundary
        data-plasmic-name={"loadingBoundary"}
        data-plasmic-override={overrides.loadingBoundary}
        className={classNames("__wab_instance", sty.loadingBoundary)}
        loadingState={
          <DataCtxReader__>
            {$ctx => (
              <div className={classNames(projectcss.all, sty.freeBox__y4Vc)}>
                <LoadingIcon
                  className={classNames(projectcss.all, sty.svg__rhWgE)}
                  role={"img"}
                />
              </div>
            )}
          </DataCtxReader__>
        }
      >
        <DataCtxReader__>
          {$ctx => (
            <div className={classNames(projectcss.all, sty.freeBox___7LTqk)}>
              {renderPlasmicSlot({
                defaultContents: (
                  <section
                    className={classNames(projectcss.all, sty.section__axVR)}
                  >
                    <h1
                      className={classNames(
                        projectcss.all,
                        projectcss.h1,
                        projectcss.__wab_text,
                        sty.h1___9KvSk
                      )}
                    >
                      {"You won't believe what happens next."}
                    </h1>
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__auKkB
                      )}
                    >
                      {"Enter some text"}
                    </div>
                  </section>
                ),
                value: args.children
              })}
            </div>
          )}
        </DataCtxReader__>
      </LoadingBoundary>
    </RichLayout>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  foundation: ["foundation", "loadingBoundary"],
  loadingBoundary: ["loadingBoundary"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  foundation: typeof RichLayout;
  loadingBoundary: typeof LoadingBoundary;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicPageLayout__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicPageLayout__VariantsArgs;
    args?: PlasmicPageLayout__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicPageLayout__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicPageLayout__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicPageLayout__ArgProps,
          internalVariantPropNames: PlasmicPageLayout__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicPageLayout__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "foundation") {
    func.displayName = "PlasmicPageLayout";
  } else {
    func.displayName = `PlasmicPageLayout.${nodeName}`;
  }
  return func;
}

export const PlasmicPageLayout = Object.assign(
  // Top-level PlasmicPageLayout renders the root element
  makeNodeComponent("foundation"),
  {
    // Helper components rendering sub-elements
    loadingBoundary: makeNodeComponent("loadingBoundary"),

    // Metadata about props expected for PlasmicPageLayout
    internalVariantProps: PlasmicPageLayout__VariantProps,
    internalArgProps: PlasmicPageLayout__ArgProps
  }
);

export default PlasmicPageLayout;
/* prettier-ignore-end */
