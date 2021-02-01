package de.fhg.iais.roberta.visitor.lang;

import de.fhg.iais.roberta.syntax.lang.blocksequence.ActivityTask;
import de.fhg.iais.roberta.syntax.lang.blocksequence.Location;
import de.fhg.iais.roberta.syntax.lang.blocksequence.MainTask;
import de.fhg.iais.roberta.syntax.lang.blocksequence.StartActivityTask;
import de.fhg.iais.roberta.syntax.lang.expr.ActionExpr;
import de.fhg.iais.roberta.syntax.lang.expr.Binary;
import de.fhg.iais.roberta.syntax.lang.expr.BoolConst;
import de.fhg.iais.roberta.syntax.lang.expr.ColorConst;
import de.fhg.iais.roberta.syntax.lang.expr.ConnectConst;
import de.fhg.iais.roberta.syntax.lang.expr.EmptyExpr;
import de.fhg.iais.roberta.syntax.lang.expr.EmptyList;
import de.fhg.iais.roberta.syntax.lang.expr.EvalExpr;
import de.fhg.iais.roberta.syntax.lang.expr.ExprList;
import de.fhg.iais.roberta.syntax.lang.expr.FunctionExpr;
import de.fhg.iais.roberta.syntax.lang.expr.ListCreate;
import de.fhg.iais.roberta.syntax.lang.expr.MathConst;
import de.fhg.iais.roberta.syntax.lang.expr.MethodExpr;
import de.fhg.iais.roberta.syntax.lang.expr.NullConst;
import de.fhg.iais.roberta.syntax.lang.expr.NumConst;
import de.fhg.iais.roberta.syntax.lang.expr.RgbColor;
import de.fhg.iais.roberta.syntax.lang.expr.SensorExpr;
import de.fhg.iais.roberta.syntax.lang.expr.ShadowExpr;
import de.fhg.iais.roberta.syntax.lang.expr.StmtExpr;
import de.fhg.iais.roberta.syntax.lang.expr.StringConst;
import de.fhg.iais.roberta.syntax.lang.expr.Unary;
import de.fhg.iais.roberta.syntax.lang.expr.Var;
import de.fhg.iais.roberta.syntax.lang.expr.VarDeclaration;
import de.fhg.iais.roberta.syntax.lang.functions.GetSubFunct;
import de.fhg.iais.roberta.syntax.lang.functions.IndexOfFunct;
import de.fhg.iais.roberta.syntax.lang.functions.LengthOfIsEmptyFunct;
import de.fhg.iais.roberta.syntax.lang.functions.ListGetIndex;
import de.fhg.iais.roberta.syntax.lang.functions.ListRepeat;
import de.fhg.iais.roberta.syntax.lang.functions.ListSetIndex;
import de.fhg.iais.roberta.syntax.lang.functions.MathCastCharFunct;
import de.fhg.iais.roberta.syntax.lang.functions.MathCastStringFunct;
import de.fhg.iais.roberta.syntax.lang.functions.MathConstrainFunct;
import de.fhg.iais.roberta.syntax.lang.functions.MathNumPropFunct;
import de.fhg.iais.roberta.syntax.lang.functions.MathOnListFunct;
import de.fhg.iais.roberta.syntax.lang.functions.MathPowerFunct;
import de.fhg.iais.roberta.syntax.lang.functions.MathRandomFloatFunct;
import de.fhg.iais.roberta.syntax.lang.functions.MathRandomIntFunct;
import de.fhg.iais.roberta.syntax.lang.functions.MathSingleFunct;
import de.fhg.iais.roberta.syntax.lang.functions.TextCharCastNumberFunct;
import de.fhg.iais.roberta.syntax.lang.functions.TextJoinFunct;
import de.fhg.iais.roberta.syntax.lang.functions.TextPrintFunct;
import de.fhg.iais.roberta.syntax.lang.functions.TextStringCastNumberFunct;
import de.fhg.iais.roberta.syntax.lang.methods.MethodCall;
import de.fhg.iais.roberta.syntax.lang.methods.MethodIfReturn;
import de.fhg.iais.roberta.syntax.lang.methods.MethodReturn;
import de.fhg.iais.roberta.syntax.lang.methods.MethodVoid;
import de.fhg.iais.roberta.syntax.lang.stmt.ActionStmt;
import de.fhg.iais.roberta.syntax.lang.stmt.AssertStmt;
import de.fhg.iais.roberta.syntax.lang.stmt.AssignStmt;
import de.fhg.iais.roberta.syntax.lang.stmt.DebugAction;
import de.fhg.iais.roberta.syntax.lang.stmt.ExprStmt;
import de.fhg.iais.roberta.syntax.lang.stmt.FunctionStmt;
import de.fhg.iais.roberta.syntax.lang.stmt.IfStmt;
import de.fhg.iais.roberta.syntax.lang.stmt.MethodStmt;
import de.fhg.iais.roberta.syntax.lang.stmt.NNStepStmt;
import de.fhg.iais.roberta.syntax.lang.stmt.RepeatStmt;
import de.fhg.iais.roberta.syntax.lang.stmt.SensorStmt;
import de.fhg.iais.roberta.syntax.lang.stmt.StmtFlowCon;
import de.fhg.iais.roberta.syntax.lang.stmt.StmtList;
import de.fhg.iais.roberta.syntax.lang.stmt.StmtTextComment;
import de.fhg.iais.roberta.syntax.lang.stmt.WaitStmt;
import de.fhg.iais.roberta.syntax.lang.stmt.WaitTimeStmt;
import de.fhg.iais.roberta.syntax.sensor.generic.TimerSensor;
import de.fhg.iais.roberta.visitor.IVisitor;

public interface ILanguageVisitor<V> extends IVisitor<V> {

    V visitNumConst(NumConst<V> numConst);

    V visitMathConst(MathConst<V> mathConst);

    V visitBoolConst(BoolConst<V> boolConst);

    V visitStringConst(StringConst<V> stringConst);

    V visitNullConst(NullConst<V> nullConst);

    V visitColorConst(ColorConst<V> colorConst);

    V visitRgbColor(RgbColor<V> rgbColor);

    V visitStmtTextComment(StmtTextComment<V> stmtTextComment);

    V visitConnectConst(ConnectConst<V> connectConst);

    V visitVar(Var<V> var);

    V visitVarDeclaration(VarDeclaration<V> var);

    V visitUnary(Unary<V> unary);

    V visitBinary(Binary<V> binary);

    V visitMathPowerFunct(MathPowerFunct<V> mathPowerFunct);

    V visitEmptyList(EmptyList<V> emptyList);

    V visitAssignStmt(AssignStmt<V> assignStmt);

    V visitEmptyExpr(EmptyExpr<V> emptyExpr);

    V visitExprList(ExprList<V> exprList);

    V visitIfStmt(IfStmt<V> ifStmt);

    V visitNNStepStmt(NNStepStmt<V> nnStepStmt);

    V visitRepeatStmt(RepeatStmt<V> repeatStmt);

    V visitStmtFlowCon(StmtFlowCon<V> stmtFlowCon);

    V visitStmtList(StmtList<V> stmtList);

    V visitMainTask(MainTask<V> mainTask);

    V visitWaitStmt(WaitStmt<V> waitStmt);

    V visitWaitTimeStmt(WaitTimeStmt<V> waitTimeStmt);

    V visitTextPrintFunct(TextPrintFunct<V> textPrintFunct);

    V visitGetSubFunct(GetSubFunct<V> getSubFunct);

    V visitIndexOfFunct(IndexOfFunct<V> indexOfFunct);

    V visitLengthOfIsEmptyFunct(LengthOfIsEmptyFunct<V> lengthOfIsEmptyFunct);

    V visitListCreate(ListCreate<V> listCreate);

    V visitListGetIndex(ListGetIndex<V> listGetIndex);

    V visitListRepeat(ListRepeat<V> listRepeat);

    V visitListSetIndex(ListSetIndex<V> listSetIndex);

    V visitMathConstrainFunct(MathConstrainFunct<V> mathConstrainFunct);

    V visitMathNumPropFunct(MathNumPropFunct<V> mathNumPropFunct);

    V visitMathOnListFunct(MathOnListFunct<V> mathOnListFunct);

    V visitMathRandomFloatFunct(MathRandomFloatFunct<V> mathRandomFloatFunct);

    V visitMathRandomIntFunct(MathRandomIntFunct<V> mathRandomIntFunct);

    V visitMathSingleFunct(MathSingleFunct<V> mathSingleFunct);

    V visitMathCastStringFunct(MathCastStringFunct<V> mathCastStringFunct);

    V visitMathCastCharFunct(MathCastCharFunct<V> mathCastCharFunct);

    V visitTextCharCastNumberFunct(TextCharCastNumberFunct<V> textCharCastNumberFunct);

    V visitTextStringCastNumberFunct(TextStringCastNumberFunct<V> textStringCastNumberFunct);

    V visitTextJoinFunct(TextJoinFunct<V> textJoinFunct);

    V visitMethodVoid(MethodVoid<V> methodVoid);

    V visitMethodReturn(MethodReturn<V> methodReturn);

    V visitMethodIfReturn(MethodIfReturn<V> methodIfReturn);

    V visitMethodStmt(MethodStmt<V> methodStmt);

    V visitMethodCall(MethodCall<V> methodCall);

    V visitTimerSensor(TimerSensor<V> timerSensor);

    V visitAssertStmt(AssertStmt<V> assertStmt);

    V visitDebugAction(DebugAction<V> debugAction);

    default V visitSensorExpr(SensorExpr<V> sensorExpr) {
        sensorExpr.getSens().accept(this);
        return null;
    }

    default V visitMethodExpr(MethodExpr<V> methodExpr) {
        methodExpr.getMethod().accept(this);
        return null;
    }

    default V visitActionStmt(ActionStmt<V> actionStmt) {
        actionStmt.getAction().accept(this);
        return null;
    }

    default V visitActionExpr(ActionExpr<V> actionExpr) {
        actionExpr.getAction().accept(this);
        return null;
    }

    default V visitExprStmt(ExprStmt<V> exprStmt) {
        exprStmt.getExpr().accept(this);
        return null;
    }

    default V visitStmtExpr(StmtExpr<V> stmtExpr) {
        stmtExpr.getStmt().accept(this);
        return null;
    }

    default V visitShadowExpr(ShadowExpr<V> shadowExpr) {
        if ( shadowExpr.getBlock() != null ) {
            shadowExpr.getBlock().accept(this);
        } else {
            shadowExpr.getShadow().accept(this);
        }
        return null;
    }

    default V visitSensorStmt(SensorStmt<V> sensorStmt) {
        sensorStmt.getSensor().accept(this);
        return null;
    }

    default V visitActivityTask(ActivityTask<V> activityTask) {
        return null;
    }

    default V visitStartActivityTask(StartActivityTask<V> startActivityTask) {
        return null;
    }

    default V visitLocation(Location<V> location) {
        return null;
    }

    default V visitFunctionStmt(FunctionStmt<V> functionStmt) {
        functionStmt.getFunction().accept(this);
        return null;
    }

    default V visitFunctionExpr(FunctionExpr<V> functionExpr) {
        functionExpr.getFunction().accept(this);
        return null;
    }

    default V visitEvalExpr(EvalExpr<V> evalExpr) {
        if ( evalExpr.getExpr() instanceof ListCreate<?> ) {
            ((ListCreate<V>) evalExpr.getExpr()).accept(this);
        } else {
            evalExpr.getExpr().accept(this);
        }
        return null;
    }

}
