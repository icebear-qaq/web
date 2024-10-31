// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: btm2dnrunf38Pvbn4oHZBZ
// Component: uUUUReuL53S1

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
import * as plasmicAuth from "@plasmicapp/react-web/lib/auth";
import { usePlasmicDataSourceContext } from "@plasmicapp/data-sources-context";
import {
  executePlasmicDataOp,
  usePlasmicDataOp,
  usePlasmicInvalidate
} from "@plasmicapp/react-web/lib/data-sources";

import PageLayout from "../../PageLayout"; // plasmic-import: cNhW0j82HfTQ/component
import { FormWrapper } from "@plasmicpkgs/antd5/skinny/Form";
import { formHelpers as FormWrapper_Helpers } from "@plasmicpkgs/antd5/skinny/Form";
import { FormItemWrapper } from "@plasmicpkgs/antd5/skinny/FormItem";
import { AntdInput } from "@plasmicpkgs/antd5/skinny/registerInput";
import { inputHelpers as AntdInput_Helpers } from "@plasmicpkgs/antd5/skinny/registerInput";
import { AntdSelect } from "@plasmicpkgs/antd5/skinny/registerSelect";
import { AntdTextArea } from "@plasmicpkgs/antd5/skinny/registerInput";
import { inputHelpers as AntdTextArea_Helpers } from "@plasmicpkgs/antd5/skinny/registerInput";
import { AntdButton } from "@plasmicpkgs/antd5/skinny/registerButton";
import { Fetcher } from "@plasmicapp/react-web/lib/data-sources";

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: btm2dnrunf38Pvbn4oHZBZ/projectcss
import sty from "./PlasmicNewCandidate.module.css"; // plasmic-import: uUUUReuL53S1/css

createPlasmicElementProxy;

export type PlasmicNewCandidate__VariantMembers = {};
export type PlasmicNewCandidate__VariantsArgs = {};
type VariantPropType = keyof PlasmicNewCandidate__VariantsArgs;
export const PlasmicNewCandidate__VariantProps = new Array<VariantPropType>();

export type PlasmicNewCandidate__ArgsType = {};
type ArgPropType = keyof PlasmicNewCandidate__ArgsType;
export const PlasmicNewCandidate__ArgProps = new Array<ArgPropType>();

export type PlasmicNewCandidate__OverridesType = {
  root?: Flex__<"div">;
  pageLayout?: Flex__<typeof PageLayout>;
  section?: Flex__<"section">;
  h1?: Flex__<"h1">;
  form?: Flex__<typeof FormWrapper>;
  select?: Flex__<typeof AntdSelect>;
  textArea?: Flex__<typeof AntdTextArea>;
  button?: Flex__<typeof AntdButton>;
  text?: Flex__<"div">;
};

export interface DefaultNewCandidateProps {
  className?: string;
}

const $$ = {};

function PlasmicNewCandidate__RenderFunc(props: {
  variants: PlasmicNewCandidate__VariantsArgs;
  args: PlasmicNewCandidate__ArgsType;
  overrides: PlasmicNewCandidate__OverridesType;
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

  let [$queries, setDollarQueries] = React.useState<
    Record<string, ReturnType<typeof usePlasmicDataOp>>
  >({});
  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "form.value",
        type: "private",
        variableType: "object",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined,

        refName: "form",
        onMutate: generateOnMutateForSpec("value", FormWrapper_Helpers)
      },
      {
        path: "form.isSubmitting",
        type: "private",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) => false,

        refName: "form",
        onMutate: generateOnMutateForSpec("isSubmitting", FormWrapper_Helpers)
      }
    ],
    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: $queries,
    $refs
  });
  const dataSourcesCtx = usePlasmicDataSourceContext();
  const plasmicInvalidate = usePlasmicInvalidate();

  const new$Queries: Record<string, ReturnType<typeof usePlasmicDataOp>> = {
    positions: usePlasmicDataOp(() => {
      return {
        sourceId: "gtYKLw7KRCthUM7M1zjfhd",
        opId: "bc4a3425-fe2b-4913-9c54-2b0fd4538194",
        userArgs: {},
        cacheKey: `plasmic.$.bc4a3425-fe2b-4913-9c54-2b0fd4538194.$.`,
        invalidatedKeys: null,
        roleId: "5d3748e7-f61b-4382-88c0-b75d69da4ab9"
      };
    })
  };
  if (Object.keys(new$Queries).some(k => new$Queries[k] !== $queries[k])) {
    setDollarQueries(new$Queries);

    $queries = new$Queries;
  }

  return (
    <React.Fragment>
      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            plasmic_antd_5_hostless_css.plasmic_tokens,
            plasmic_plasmic_rich_components_css.plasmic_tokens,
            sty.root
          )}
        >
          <PageLayout
            data-plasmic-name={"pageLayout"}
            data-plasmic-override={overrides.pageLayout}
          >
            <DataCtxReader__>
              {$ctx => (
                <section
                  data-plasmic-name={"section"}
                  data-plasmic-override={overrides.section}
                  className={classNames(projectcss.all, sty.section)}
                >
                  <h1
                    data-plasmic-name={"h1"}
                    data-plasmic-override={overrides.h1}
                    className={classNames(
                      projectcss.all,
                      projectcss.h1,
                      projectcss.__wab_text,
                      sty.h1
                    )}
                  >
                    {"New candidate"}
                  </h1>
                  {(() => {
                    const child$Props = {
                      className: classNames("__wab_instance", sty.form),
                      extendedOnValuesChange:
                        generateStateOnChangePropForCodeComponents(
                          $state,
                          "value",
                          ["form", "value"],
                          FormWrapper_Helpers
                        ),
                      formItems: undefined,
                      labelCol: { span: 8, horizontalOnly: true },
                      layout: "vertical",
                      mode: undefined,
                      onFinish: async values => {
                        const $steps = {};

                        $steps["postgresCreate"] = true
                          ? (() => {
                              const actionArgs = {
                                dataOp: {
                                  sourceId: "gtYKLw7KRCthUM7M1zjfhd",
                                  opId: "dc2e2fd2-0f28-4a4d-8578-fd37da5277b0",
                                  userArgs: {},
                                  cacheKey: null,
                                  invalidatedKeys: ["plasmic_refresh_all"],
                                  roleId: "5d3748e7-f61b-4382-88c0-b75d69da4ab9"
                                }
                              };
                              return (async ({ dataOp, continueOnError }) => {
                                try {
                                  const response = await executePlasmicDataOp(
                                    dataOp,
                                    {
                                      userAuthToken:
                                        dataSourcesCtx?.userAuthToken,
                                      user: dataSourcesCtx?.user
                                    }
                                  );
                                  await plasmicInvalidate(
                                    dataOp.invalidatedKeys
                                  );
                                  return response;
                                } catch (e) {
                                  if (!continueOnError) {
                                    throw e;
                                  }
                                  return e;
                                }
                              })?.apply(null, [actionArgs]);
                            })()
                          : undefined;
                        if (
                          $steps["postgresCreate"] != null &&
                          typeof $steps["postgresCreate"] === "object" &&
                          typeof $steps["postgresCreate"].then === "function"
                        ) {
                          $steps["postgresCreate"] = await $steps[
                            "postgresCreate"
                          ];
                        }

                        $steps["goToDashboard"] = true
                          ? (() => {
                              const actionArgs = {};
                              return (({ destination }) => {
                                if (
                                  typeof destination === "string" &&
                                  destination.startsWith("#")
                                ) {
                                  document
                                    .getElementById(destination.substr(1))
                                    .scrollIntoView({ behavior: "smooth" });
                                } else {
                                  location.assign(destination);
                                }
                              })?.apply(null, [actionArgs]);
                            })()
                          : undefined;
                        if (
                          $steps["goToDashboard"] != null &&
                          typeof $steps["goToDashboard"] === "object" &&
                          typeof $steps["goToDashboard"].then === "function"
                        ) {
                          $steps["goToDashboard"] = await $steps[
                            "goToDashboard"
                          ];
                        }
                      },
                      onIsSubmittingChange:
                        generateStateOnChangePropForCodeComponents(
                          $state,
                          "isSubmitting",
                          ["form", "isSubmitting"],
                          FormWrapper_Helpers
                        ),
                      ref: ref => {
                        $refs["form"] = ref;
                      },
                      wrapperCol: { span: 16, horizontalOnly: true }
                    };
                    initializeCodeComponentStates(
                      $state,
                      [
                        {
                          name: "value",
                          plasmicStateName: "form.value"
                        },
                        {
                          name: "isSubmitting",
                          plasmicStateName: "form.isSubmitting"
                        }
                      ],
                      [],
                      FormWrapper_Helpers ?? {},
                      child$Props
                    );

                    return (
                      <FormWrapper
                        data-plasmic-name={"form"}
                        data-plasmic-override={overrides.form}
                        {...child$Props}
                      >
                        <FormItemWrapper
                          className={classNames(
                            "__wab_instance",
                            sty.formField__rW4YT
                          )}
                          label={"Name"}
                          name={"name"}
                          rules={[
                            { ruleType: "required" },

                            { ruleType: "min", length: 3 }
                          ]}
                        >
                          <AntdInput
                            className={classNames(
                              "__wab_instance",
                              sty.input__rLpmw
                            )}
                          />
                        </FormItemWrapper>
                        <FormItemWrapper
                          className={classNames(
                            "__wab_instance",
                            sty.formField__d1TcY
                          )}
                          label={"Email"}
                          name={"email"}
                          rules={[]}
                        >
                          <AntdInput
                            className={classNames(
                              "__wab_instance",
                              sty.input___3E07U
                            )}
                          />
                        </FormItemWrapper>
                        <FormItemWrapper
                          className={classNames(
                            "__wab_instance",
                            sty.formField__e8LjW
                          )}
                          label={"Phone"}
                          name={"phone"}
                        >
                          <AntdInput
                            className={classNames(
                              "__wab_instance",
                              sty.input__haX18
                            )}
                          />
                        </FormItemWrapper>
                        <FormItemWrapper
                          className={classNames(
                            "__wab_instance",
                            sty.formField__u5Zrx
                          )}
                          label={"Resume URL"}
                          name={"resume_url"}
                        >
                          <AntdInput
                            className={classNames(
                              "__wab_instance",
                              sty.input__fhQzd
                            )}
                          />
                        </FormItemWrapper>
                        <FormItemWrapper
                          className={classNames(
                            "__wab_instance",
                            sty.formField__aphG6
                          )}
                          label={"Applied for"}
                          name={"position_id"}
                          rules={[{ ruleType: "required" }]}
                        >
                          <AntdSelect
                            className={classNames("__wab_instance", sty.select)}
                            defaultStylesClassName={classNames(
                              projectcss.root_reset,
                              projectcss.plasmic_default_styles,
                              projectcss.plasmic_mixins,
                              projectcss.plasmic_tokens,
                              plasmic_antd_5_hostless_css.plasmic_tokens,
                              plasmic_plasmic_rich_components_css.plasmic_tokens
                            )}
                            options={(() => {
                              try {
                                return $queries.positions.data.map(p => ({
                                  label: p.title,
                                  value: p.id
                                }));
                              } catch (e) {
                                if (
                                  e instanceof TypeError ||
                                  e?.plasmicType === "PlasmicUndefinedDataError"
                                ) {
                                  return undefined;
                                }
                                throw e;
                              }
                            })()}
                            placeholder={"Select..."}
                            popupScopeClassName={sty["select__popup"]}
                          />
                        </FormItemWrapper>
                        <FormItemWrapper
                          className={classNames(
                            "__wab_instance",
                            sty.formField__otVaq
                          )}
                          label={"Notes"}
                          name={"notes"}
                        >
                          <AntdTextArea
                            className={classNames(
                              "__wab_instance",
                              sty.textArea
                            )}
                          />
                        </FormItemWrapper>
                        <AntdButton
                          className={classNames("__wab_instance", sty.button)}
                          size={"large"}
                          submitsForm={true}
                          type={"primary"}
                        >
                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text
                            )}
                          >
                            {"Submit"}
                          </div>
                        </AntdButton>
                      </FormWrapper>
                    );
                  })()}
                </section>
              )}
            </DataCtxReader__>
          </PageLayout>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "pageLayout",
    "section",
    "h1",
    "form",
    "select",
    "textArea",
    "button",
    "text"
  ],
  pageLayout: [
    "pageLayout",
    "section",
    "h1",
    "form",
    "select",
    "textArea",
    "button",
    "text"
  ],
  section: ["section", "h1", "form", "select", "textArea", "button", "text"],
  h1: ["h1"],
  form: ["form", "select", "textArea", "button", "text"],
  select: ["select"],
  textArea: ["textArea"],
  button: ["button", "text"],
  text: ["text"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  pageLayout: typeof PageLayout;
  section: "section";
  h1: "h1";
  form: typeof FormWrapper;
  select: typeof AntdSelect;
  textArea: typeof AntdTextArea;
  button: typeof AntdButton;
  text: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicNewCandidate__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicNewCandidate__VariantsArgs;
    args?: PlasmicNewCandidate__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicNewCandidate__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicNewCandidate__ArgsType,
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
          internalArgPropNames: PlasmicNewCandidate__ArgProps,
          internalVariantPropNames: PlasmicNewCandidate__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicNewCandidate__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicNewCandidate";
  } else {
    func.displayName = `PlasmicNewCandidate.${nodeName}`;
  }
  return func;
}

function withPlasmicPageGuard<P extends object>(
  WrappedComponent: React.ComponentType<P>
) {
  const PageGuard: React.FC<P> = props => (
    <PlasmicPageGuard__
      minRole={"5d3748e7-f61b-4382-88c0-b75d69da4ab9"}
      appId={"btm2dnrunf38Pvbn4oHZBZ"}
      authorizeEndpoint={"https://studio.plasmic.app/authorize"}
      canTriggerLogin={true}
    >
      <WrappedComponent {...props} />
    </PlasmicPageGuard__>
  );

  return PageGuard;
}

function withUsePlasmicAuth<P extends object>(
  WrappedComponent: React.ComponentType<P>
) {
  const WithUsePlasmicAuthComponent: React.FC<P> = props => {
    const dataSourceCtx = usePlasmicDataSourceContext() ?? {};
    const { isUserLoading, user, token } = plasmicAuth.usePlasmicAuth({
      appId: "btm2dnrunf38Pvbn4oHZBZ"
    });

    return (
      <PlasmicDataSourceContextProvider__
        value={{
          ...dataSourceCtx,
          isUserLoading,
          userAuthToken: token,
          user
        }}
      >
        <WrappedComponent {...props} />
      </PlasmicDataSourceContextProvider__>
    );
  };
  return WithUsePlasmicAuthComponent;
}

export const PlasmicNewCandidate = Object.assign(
  // Top-level PlasmicNewCandidate renders the root element
  withUsePlasmicAuth(withPlasmicPageGuard(makeNodeComponent("root"))),
  {
    // Helper components rendering sub-elements
    pageLayout: makeNodeComponent("pageLayout"),
    section: makeNodeComponent("section"),
    h1: makeNodeComponent("h1"),
    form: makeNodeComponent("form"),
    select: makeNodeComponent("select"),
    textArea: makeNodeComponent("textArea"),
    button: makeNodeComponent("button"),
    text: makeNodeComponent("text"),

    // Metadata about props expected for PlasmicNewCandidate
    internalVariantProps: PlasmicNewCandidate__VariantProps,
    internalArgProps: PlasmicNewCandidate__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicNewCandidate;
/* prettier-ignore-end */
